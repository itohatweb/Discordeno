import { eventHandlers } from "../../bot.ts";
import { DiscordPayload, GuildDeletePayload } from "../../types/mod.ts";
import { basicShards } from "../../ws/shard.ts";
import { cacheHandlers } from "../../cache.ts";

export async function handleGuildDelete(
  data: DiscordPayload,
  shardID: number,
) {
  const payload = data.d as GuildDeletePayload;
  cacheHandlers.forEach("messages", (message) => {
    if (message.guildID === payload.id) {
      cacheHandlers.delete("messages", message.id);
    }
  });

  cacheHandlers.forEach("channels", (channel) => {
    if (channel.guildID === payload.id) {
      cacheHandlers.delete("channels", channel.id);
    }
  });

  cacheHandlers.forEach("members", async (member) => {
    if (!member.guilds.has(payload.id)) return;

    member.guilds.delete(payload.id);

    if (!member.guilds.size) {
      await cacheHandlers.delete("members", member.id);
      return;
    }

    await cacheHandlers.set("members", member.id, member);
  });

  if (payload.unavailable) {
    const shard = basicShards.get(shardID);
    if (shard) shard.unavailableGuildIDs.add(payload.id);

    return cacheHandlers.set("unavailableGuilds", payload.id, Date.now());
  }

  const guild = await cacheHandlers.get("guilds", payload.id);
  if (!guild) return;

  await cacheHandlers.delete("guilds", payload.id);

  eventHandlers.guildDelete?.(guild);
}
