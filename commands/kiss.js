const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_318.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_0.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_359.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_296.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_357.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_362.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_288.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_391.gif',
  'https://loritta.website/assets/img/actions/kiss/both/gif_281.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_382.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_321.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_384.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_358.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_381.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_339.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_375.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_380.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_289.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_351.gif',
  'https://loritta.website/assets/img/actions/kiss/both/gif_284.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_366.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_343.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_301.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_355.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_317.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_367.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_377.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_302.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_354.gif',
  'https://loritta.website/assets/img/actions/kiss/both/gif_287.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_387.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_300.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_352.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_330.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_363.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_325.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_372.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_378.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_327.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_297.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_292.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_320.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_360.gif'
,];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
