const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Você é fraco! Lhe falta a permissão de `Administrador` para fazer isso!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Mencione um usuario e selecione um motivo para dar um warn.")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Você não pode dar warns em bots.")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Você não pode dar warn em você mesmo")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("Você não pode avisar o dono do servidor..")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Selecione um motivo.")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} Esse  já atingiu o limite de warns!`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Você tomou um aviso pelo staff **${message.guild.name}** pelo motivo: ${reason}`)
      await message.channel.send(`**${message.mentions.users.first().username} Você foi avisado!** pelo motivo: ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(` **${message.guild.name}** Você foi avisado! pelo motivo ${reason}`)
      await message.channel.send(` **${message.mentions.users.first().username}** Você foi avisado! pelo motivo ${reason}`)
    }
    
  
  } 
}
