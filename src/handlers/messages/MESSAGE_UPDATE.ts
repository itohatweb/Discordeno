import { eventHandlers } from "../../bot.ts";
import { DiscordPayload, MessageCreateOptions } from "../../types/mod.ts";
import { structures } from "../../structures/mod.ts";
import { cacheHandlers } from "../../cache.ts";

export async function handleMessageUpdate(data: DiscordPayload) {
  const payload = data.d as MessageCreateOptions;
  const channel = await cacheHandlers.get("channels", payload.channel_id);
  if (!channel) return;

  const cachedMessage = await cacheHandlers.get("messages", payload.id);
  if (!cachedMessage) return;

  const oldMessage = {
    attachments: cachedMessage.attachments,
    content: cachedMessage.content,
    embeds: cachedMessage.embeds,
    editedTimestamp: cachedMessage.editedTimestamp,
    tts: cachedMessage.tts,
    pinned: cachedMessage.pinned,
  };

  // Messages with embeds can trigger update but they wont have edited_timestamp
  if (
    !payload.edited_timestamp ||
    (cachedMessage.content === payload.content)
  ) {
    return;
  }

  const message = await structures.createMessageStruct(payload);

  await cacheHandlers.set("messages", payload.id, message);

  eventHandlers.messageUpdate?.(message, oldMessage);
}
