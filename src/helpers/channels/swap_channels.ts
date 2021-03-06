import { RequestManager } from "../../rest/request_manager.ts";
import { PositionSwap } from "../../types/mod.ts";
import { endpoints } from "../../util/constants.ts";

/** Modify the positions of channels on the guild. Requires MANAGE_CHANNELS permisison. */
export async function swapChannels(
  guildID: string,
  channelPositions: PositionSwap[],
) {
  if (channelPositions.length < 2) {
    throw "You must provide at least two channels to be swapped.";
  }

  const result = await RequestManager.patch(
    endpoints.GUILD_CHANNELS(guildID),
    channelPositions,
  );

  return result;
}
