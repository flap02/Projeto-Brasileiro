const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você não tem permissão para usar esse comando!')
        message.channel.overwritePermissions([{ 

            id: message.guild.id, 
            
            deny: ['SEND_MESSAGES'], 
            
            }]); 
            
            let embed = new Discord.MessageEmbed()
               .setColor('#00FFFF')
               .setTitle('🔒 | Chat Bloqueado com sucesso para desbloquear use !unlock para desbloquea-lo!')
               .setFooter(`Comando Solicitado por: ${message.author.username}`)


            return message.reply(embed)
    }
