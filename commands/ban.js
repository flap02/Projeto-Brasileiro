const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('\`❌\`| Você não tem permissão de banir')
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('\`😐\`| Não tenho permissão de banir aqui... :thinking: ')
    if (!args[0]) return message.channel.send('Se usa assim \`ban @mention\` ou \`ban ID\`')

    let mention = message.mentions.members.first()
    let member = mention? mention: message.guild.members.cache.get(args[0])

    const embed = new Discord.MessageEmbed()
    if (!member) return message.channel.send(embed
        .setColor('#f00000')
        .setDescription(`\`❌\`| Usuário não encontrado`))
    
    
    
    member.ban()
        .then(m => message.reply(embed
            .setColor('#00ff95')
            .setDescription(`\`✅\`| ${m.user.tag}/ <@${m.user.id}> foi banido do server!`)).delete({timeout: 5000}))

        .catch(() => message.channel.send(embed
            .setDescription(`\`❌\`| Erro ao banir usuário`)))
}

exports.config = {
    name: 'ban',
    aliases: ['ban', 'banir']
}
