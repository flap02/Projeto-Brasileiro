const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Você é fraco! lhe falta permissão de `Gerenciar Servidor` para usar esse comando."
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("Mencione um membro para mutar")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("Você não pode mutar você mesmo! Bobinho");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Por qual motivo deseja mutar esse membro?")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("Falta o cargo `Muted`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already muted")
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`Você mutou **${message.mentions.users.first().username}** por \`${reason}\``)
    
    user.send(`Você foi mutado no servidor **${message.guild.name}** pelo motivo: \`${reason}\``)
    
    
//WE ARE DONE HERE 
    
  }
};
