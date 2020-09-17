const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/hug/male_x_female/gif_125.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_181.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_135.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_144.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_143.gif',
  'https://loritta.website/assets/img/actions/hug/male_x_female/gif_127.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_156.gif',
  'https://loritta.website/assets/img/actions/hug/both/gif_118.gif',
  'https://loritta.website/assets/img/actions/hug/male_x_female/gif_122.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_152.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_150.gif',
  'https://tenor.com/view/teria-wang-kishuku-gakkou-no-juliet-hug-anime-gif-16509980',
  'https://tenor.com/view/horimiya-izumi-miyamura-hori-kyoko-couple-hug-gif-14539121',
  'https://tenor.com/view/noragami-kofuku-daikoku-hugging-love-gif-14637016',
  'https://tenor.com/view/anime-cheeks-hugs-gif-14106856',
  'https://tenor.com/view/loli-lolita-anime-kawaii-sad-gif-5640885',
  'https://tenor.com/view/hug-sad-gif-14924015',
  'https://tenor.com/view/hug-cuddle-comfort-love-friends-gif-5166500',
  'https://tenor.com/view/anime-hug-gif-15249774',
  'https://tenor.com/view/anime-hug-love-smile-gif-15942846',
  'https://loritta.website/assets/img/actions/hug/generic/gif_170.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_160.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_147.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_166.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_140.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_185.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_133.gif',
  'https://loritta.website/assets/img/actions/hug/male_x_female/gif_121.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_176.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_151.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_132.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_154.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_181.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_169.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_183.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_148.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_175.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_178.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_159.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_159.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_164.gif',
  'https://loritta.website/assets/img/actions/hug/male_x_male/gif_129.gif',
 'https://loritta.website/assets/img/actions/hug/generic/gif_175.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_158.gif',
'https://tenor.com/view/abra%C3%A7o-bff-hug-gif-14903946',  
 'https://tenor.com/view/couple-anime-hug-cuddle-gif-11098325'
  ,];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de dar um tapa em** ${user.username}! `, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Amizade :blue_heart: ')
        .setColor('#000000')
        .setDescription(`${message.author} **abraçou** ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
