const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  const ajuda = new Discord.MessageEmbed()
  
    .setColor("GREEN")
    .setTitle("**Ajuda**")
    .setDescription(`Olá, meu prefix é ! Este é meu centro de comandos, abaixo você poderá ver todos meus comandos, separados por categorias.`)
  .addField("👮‍♂️ - **MODERAÇÃO**", "Ban, unban, kick e clear")
   .addField("📁 - **UTILIDADE**", "Help, ping, say, ticket e uptime")
  .addField("🎉 - **DIVERSÃO**", "Kiss e coinflip")
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
  
  message.channel.send(ajuda)
}
