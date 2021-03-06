import { RequestManager } from "../../rest/request_manager.ts";
import { endpoints } from "../../util/constants.ts";
import { requireBotGuildPermissions } from "../../util/permissions.ts";

/** Returns a list of integrations for the guild. Requires the MANAGE_GUILD permission. */
export async function getIntegrations(guildID: string) {
  await requireBotGuildPermissions(guildID, ["MANAGE_GUILD"]);

  const result = await RequestManager.get(
    endpoints.GUILD_INTEGRATIONS(guildID),
  );

  return result;
}
