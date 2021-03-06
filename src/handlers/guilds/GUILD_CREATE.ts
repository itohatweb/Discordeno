import { eventHandlers } from "../../bot.ts";
import { cacheHandlers } from "../../cache.ts";
import { structures } from "../../structures/mod.ts";
import { CreateGuildPayload, DiscordPayload } from "../../types/mod.ts";
import { cache } from "../../util/cache.ts";
import { basicShards } from "../../ws/shard.ts";

export async function handleGuildCreate(
  data: DiscordPayload,
  shardID: number,
) {
  const payload = data.d as CreateGuildPayload;
  // When shards resume they emit GUILD_CREATE again.
  if (await cacheHandlers.has("guilds", payload.id)) return;

  const guildStruct = await structures.createGuildStruct(
    data.d as CreateGuildPayload,
    shardID,
  );
  await cacheHandlers.set("guilds", guildStruct.id, guildStruct);

  const shard = basicShards.get(shardID);

  if (shard?.unavailableGuildIDs.has(payload.id)) {
    await cacheHandlers.delete("unavailableGuilds", payload.id);

    shard.unavailableGuildIDs.delete(payload.id);
  }

  if (!cache.isReady) return eventHandlers.guildLoaded?.(guildStruct);
  eventHandlers.guildCreate?.(guildStruct);
}
