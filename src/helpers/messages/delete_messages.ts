import { RequestManager } from "../../rest/request_manager.ts";
import { Errors } from "../../types/mod.ts";
import { endpoints } from "../../util/constants.ts";
import { requireBotChannelPermissions } from "../../util/permissions.ts";

/** Delete messages from the channel. 2-100. Requires the MANAGE_MESSAGES permission */
export async function deleteMessages(
  channelID: string,
  ids: string[],
  reason?: string,
) {
  await requireBotChannelPermissions(channelID, ["MANAGE_MESSAGES"]);

  if (ids.length < 2) {
    throw new Error(Errors.DELETE_MESSAGES_MIN);
  }

  if (ids.length > 100) {
    console.warn(
      `This endpoint only accepts a maximum of 100 messages. Deleting the first 100 message ids provided.`,
    );
  }

  const result = await RequestManager.post(
    endpoints.CHANNEL_BULK_DELETE(channelID),
    {
      messages: ids.splice(0, 100),
      reason,
    },
  );

  return result;
}
