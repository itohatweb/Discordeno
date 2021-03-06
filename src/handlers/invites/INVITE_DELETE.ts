import { eventHandlers } from "../../bot.ts";
import { DiscordPayload, InviteDeleteEvent } from "../../types/mod.ts";

export function handleInviteDelete(payload: DiscordPayload) {
  if (payload.t !== "INVITE_DELETE") return;

  const {
    channel_id: channelID,
    guild_id: guildID,
    ...rest
  } = payload.d as InviteDeleteEvent;

  eventHandlers.inviteDelete?.({
    ...rest,
    channelID,
    guildID,
  });
}
