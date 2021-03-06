import { applicationID } from "../../bot.ts";
import { RequestManager } from "../../rest/request_manager.ts";
import { endpoints } from "../../util/constants.ts";

/** Deletes a slash command. */
export function deleteSlashCommand(id: string, guildID?: string) {
  if (!guildID) {
    return RequestManager.delete(endpoints.COMMANDS_ID(applicationID, id));
  }
  return RequestManager.delete(
    endpoints.COMMANDS_GUILD_ID(applicationID, guildID, id),
  );
}
