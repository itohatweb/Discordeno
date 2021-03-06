import { RequestManager } from "../../rest/request_manager.ts";
import { CreateEmojisOptions } from "../../types/mod.ts";
import { endpoints } from "../../util/constants.ts";
import { requireBotGuildPermissions } from "../../util/permissions.ts";
import { urlToBase64 } from "../../util/utils.ts";

/** Create an emoji in the server. Emojis and animated emojis have a maximum file size of 256kb. Attempting to upload an emoji larger than this limit will fail and return 400 Bad Request and an error message, but not a JSON status code. If a URL is provided to the image parameter, Discordeno will automatically convert it to a base64 string internally. */
export async function createEmoji(
  guildID: string,
  name: string,
  image: string,
  options: CreateEmojisOptions,
) {
  await requireBotGuildPermissions(guildID, ["MANAGE_EMOJIS"]);

  if (image && !image.startsWith("data:image/")) {
    image = await urlToBase64(image);
  }

  const result = await RequestManager.post(endpoints.GUILD_EMOJIS(guildID), {
    ...options,
    name,
    image,
  });

  return result;
}
