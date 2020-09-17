const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const moment = require('moment')

moment.locale = ("pt-br")

exports.run = async (client, message, args) => {


let embed = new Discord.MessageEmbed()
        .setColor('GREEN')    
        .setTitle(`${message.author.username}`)
        .addField(`<a:PandinhaFofo:756253229834174535> Tag do Discord <a:PandinhaFofo:756253229834174535>`, `${message.author.username}`, true)
        .addField(`<a:seta:755251843466264659> Id Do Discord`, `${message.author.id}`, true)
        .addField(`\📆 Conta Criada Há`, moment(message.createAt).format("LL | L"), true)
        .addField('**\📖   Você entrou em**', moment(message.guild.joinedAt).format("LL | L"), true)
            message.channel.send(embed)
    
}
