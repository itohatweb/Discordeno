import { RequestManager } from "../../rest/request_manager.ts";
import { structures } from "../../structures/mod.ts";
import { CreateGuildTemplate, GuildTemplate } from "../../types/mod.ts";
import { endpoints } from "../../util/constants.ts";
import { requireBotGuildPermissions } from "../../util/permissions.ts";

/**
 * Creates a template for the guild.
 * Requires the `MANAGE_GUILD` permission.
 * @param name name of the template (1-100 characters)
 * @param description description for the template (0-120 characters
 */
export async function createGuildTemplate(
  guildID: string,
  data: CreateGuildTemplate,
) {
  await requireBotGuildPermissions(guildID, ["MANAGE_GUILD"]);

  if (data.name.length < 1 || data.name.length > 100) {
    throw new Error("The name can only be in between 1-100 characters.");
  }

  if (data.description?.length && data.description.length > 120) {
    throw new Error("The description can only be in between 0-120 characters.");
  }

  const template = (await RequestManager.post(
    endpoints.GUILD_TEMPLATES(guildID),
    data,
  )) as GuildTemplate;

  return structures.createTemplateStruct(template);
}
