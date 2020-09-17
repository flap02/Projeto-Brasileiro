const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/slap/generic/gif_227.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_212.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_215.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_200.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_216.gif',
  'https://loritta.website/assets/img/actions/slap/male_x_female/gif_190.gif',
  'https://loritta.website/assets/img/actions/slap/male_x_female/gif_189.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_206.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_219.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_198.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_210.gif',
  'https://loritta.website/assets/img/actions/slap/generic/gif_228.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_204.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_218.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_199.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_201.gif',
  'https://loritta.website/assets/img/actions/slap/male_x_female/gif_188.gif',
  'https://tenor.com/view/anime-slap-slap-in-the-face-smash-gif-17314633',
  'https://tenor.com/view/oreimo-anime-slap-gif-10936993',
  'https://tenor.com/view/anime-slap-hit-hurt-angry-gif-12396060',
  'https://tenor.com/view/no-angry-anime-slap-gif-7355956',
  'https://tenor.com/view/bunny-girl-slap-angry-girlfriend-anime-gif-15144612',
  'https://tenor.com/view/anime-slap-mad-gif-16057834',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_203.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_207.gif',
  'https://tenor.com/view/slap-handa-seishuu-naru-kotoishi-barakamon-anime-barakamon-gif-5509136',
  'https://tenor.com/view/anime-hit-slap-ouch-angry-gif-16268549',
  'https://tenor.com/view/oreimo-dumb-stupid-smack-slap-gif-10937039',
  'https://tenor.com/view/powerful-head-slap-anime-death-tragic-gif-14358509',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_208.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_220.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_195.gif',
  'https://loritta.website/assets/img/actions/slap/generic/gif_226.gif',
  'https://loritta.website/assets/img/actions/slap/both/gif_186.gif',
  'https://loritta.website/assets/img/actions/slap/male_x_male/gif_193.gif',
  'https://loritta.website/assets/img/actions/slap/generic/gif_225.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_209.gif',
  'https://loritta.website/assets/img/actions/slap/male_x_male/gif_194.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_211.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_214.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_217.gif',
  'https://loritta.website/assets/img/actions/slap/male_x_female/gif_187.gif',
  'https://loritta.website/assets/img/actions/slap/generic/gif_223.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_200.gif',
  'https://tenor.com/view/anime-girl-slap-student-gif-17423275',
  'https://tenor.com/view/mm-emu-emu-anime-slap-strong-gif-7958720'
  ,];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa!');
}
/*
message.channel.send(`${message.author.username} **acaba de dar um tapa em** ${user.username}! `, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle(':scream_cat: Treta no ar')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar um tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
