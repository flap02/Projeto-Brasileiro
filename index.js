const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});
client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Estou Online!")
});
client.on("message", async message => {
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send(
        `${message.author} **você não pode postar link de outros servidores aqui!**`
      );
  }
});
client.on("ready", () => {
  var content = "Inscreva-se no canal Flapkz!";
  var channel = client.guilds.cache
    .get("754559607858528297") // Id do Servidor
    .channels.cache.get("754827069866901524"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel.send(content); 
  }, 1000 * 60 * 60 * 1); 
  channel.send(content);
  console.log("É para se inscrever mesmo! Saco pela.");
})
client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("732447910070976643"); // Id do Servidor
  let channel = await client.channels.cache.get("732449554791923733"); // Id do canal de boas vindas
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":heart:");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Boas-vindas`)
      .setImage("https://imgur.com/a/ttlyp1c")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Seja bem-vindo ao meu servidor! <3")
      .setTimestamp();

    channel.send(embed);
  }
});
client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("732447910070976643"); // Id do Servidor
  let channel = await client.channels.cache.get("732450003016220750"); // Id do canal de saida
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":broken_heart:");
  if (guild != member.guild) {
    return console.log("Até a próxima! :()");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Adeus!`)
      .setImage("https://tenor.com/view/squarepants-bob-sponge-see-you-later-see-ya-goodbye-gif-11918819")
      .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Alguém saiu do servidor :( Mas tudo bem!")
      .setTimestamp();

    channel.send(embed);
  }
});
client.login('')
