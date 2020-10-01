const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  
  const ajuda = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Lista de comandos!")
    .setDescription("Reagir de acordo com o  que procura!\n\n📚 - Informações\n\n🔱 - Administrativos\n\n🎊 - Diversão")
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
    
  message.channel.send(ajuda).then(msg => {
    msg.react('📚').then(r => {
      msg.react('🔱').then(r => {
    msg.react('🎊').then(r => {
      })
    })
  })
    
    const infosFilter = (reaction, user) => reaction.emoji.name === '📚' && user.id === message.author.id;
        const admFilter = (reaction, user) => reaction.emoji.name === '🔱' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.name === '🎊' && user.id === message.author.id;
    
    const infos = msg.createReactionCollector(infosFilter);
        const adm = msg.createReactionCollector(admFilter);
    const fun = msg.createReactionCollector(funFilter);

    infos.on('collect', r2 => {
      
      ajuda.setTitle("Comandos informativos!")
      ajuda.setDescription("Help, userinfo, botinfo, ping, say, ideia ticket e uptime")
      msg.edit(ajuda)
      
    })
    
    adm.on('collect', r2 => {
      
      ajuda.setTitle("Comandos de administração!")
      ajuda.setDescription("Ban, warn, warns, rwarns, mute, unmute, listban, unban, kick, lock, unlock e clear")
      msg.edit(ajuda)
      
    })
    
    fun.on('collect', r2 => {
      
      ajuda.setTitle("Comandos de diversão!")
      ajuda.setDescription("Kiss, pat, hug, meme, ship, slap e coinflip")
      msg.edit(ajuda)
      
    })
  })  
} 
