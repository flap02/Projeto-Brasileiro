const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Você é fraco! Lhe falta a permissão de `Administrador` para fazer isso!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Mencione um usuario para resetar os warns.")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Você não pode resetar os warns do bot!")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Você não pode resetar seus warns")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} Não tem warns.`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Seus warns foram resetador por ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Os warns de ${message.mentions.users.first().username} foram resetados!`)
    
  
    
}
}
