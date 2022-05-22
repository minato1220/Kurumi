/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "kurumi",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/Jwn9grLzvoQAAAPo/nikz-lelouch.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `💕 *KURUMI* 💘\n\n💝 *Description: A WHATSAPP BOT CREATED BY 𝐦𝐢𝐧𝐚𝐭𝐨 𝐯𝐢 𝐛𝐫𝐢𝐭𝐚𝐧𝐧𝐢𝐚 aka G𝓮𝓷𝓲𝓾𝓼❥-✿ Ꮇ Ｉ N Ꭺ Ꭲ Ｏ ✿* \n`,
			}
		);
	};
}
