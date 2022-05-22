import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help8',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help8 (command_name)`,
            dm: true,
            aliases: ['h8']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://c.tenor.com/g6kpP9KSku4AAAPo/date-al-ive-kurumi-tokisaki.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-🄽🅂🄵🅆 🄻🄸🅂🅃💫🔞🧣✨
──────────────
🔮 ${this.client.config.prefix}ᴀɴᴀʟ
🔮 ${this.client.config.prefix}ʙʟᴏᴡᴊᴏʙ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡᴅᴏᴜᴊɪɴ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡʟᴏʟɪ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡᴘᴀᴘᴇʀ
🔮 ${this.client.config.prefix}ᴛʜɪɢʜꜱ
🔮 ${this.client.config.prefix}ʜᴇɴᴛᴀɪ
🔮 ${this.client.config.prefix}ᴍᴀɪᴅ
🔮 ${this.client.config.prefix}ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ
🔮 ${this.client.config.prefix}ɴᴄᴏᴅᴇ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡ-ᴡᴀɪꜰᴜ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡᴊᴏᴋᴇ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡ-ɴᴇᴋᴏ
🔮 ${this.client.config.prefix}ᴘᴜꜱꜱʏ
🔮 ${this.client.config.prefix}ᴛʀᴀᴘ
🔮 ${this.client.config.prefix}xnxx {name}
🔮 ${this.client.config.prefix}school
🔮 ${this.client.config.prefix}ero
🔮 ${this.client.config.prefix}uniform
🔮 ${this.client.config.prefix}erok
🔮 ${this.client.config.prefix}erofeet
🔮 ${this.client.config.prefix}hgif
🔮 ${this.client.config.prefix}bsdm
🔮 ${this.client.config.prefix}panties
🔮 ${this.client.config.prefix}femdom
🔮 ${this.client.config.prefix}keta
🔮 ${this.client.config.prefix}boobs
🔮 ${this.client.config.prefix}succubus
🔮 ${this.client.config.prefix}mifi
🔮 ${this.client.config.prefix}cum
🔮 ${this.client.config.prefix}spank
🔮 ${this.client.config.prefix}nsfwkitsune
🔮 ${this.client.config.prefix}rhentai
🔮 ${this.client.config.prefix}nnekogif
🔮 ${this.client.config.prefix}nhentai
🔮 ${this.client.config.prefix}netorare
🔮 ${this.client.config.prefix}pj
🔮 ${this.client.config.prefix}rb
🔮 ${this.client.config.prefix}yuri
💫HORNI PEEPS EVERYWHERE😞
──────────────` }
        )
    }
}
