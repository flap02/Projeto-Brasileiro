const Discord = require('discord.js')

module.exports = {
    name: 'unlock',
    aliases: [],
    run: (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você é fraco, lhe falta a permissão de `Administrador` para usar esse comando.')
        message.channel.overwritePermissions([{
            id: message.guild.id,
            accept: ['SEND_MESSAGES'],
            }]);
            return message.reply("\:unlock:  | Chat Desbloqueado com sucesso use !lock para bloquea-lo!")
       }

    }
