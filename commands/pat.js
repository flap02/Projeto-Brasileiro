const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/headpat/generic/gif_3.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_13.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_9.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_11.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_1.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_7.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_4.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_5.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_2.gif',
  'https://tenor.com/view/nogamenolife-shiro-headrub-sleepy-tired-gif-6238142',
  'https://tenor.com/view/kanna-kamui-pat-head-pat-gif-12018819',
  'https://tenor.com/view/nogamenolife-shiro-headrub-sleepy-tired-gif-6238142',
  'https://tenor.com/view/neet-anime-cute-kawaii-pat-gif-9332926',
  'https://tenor.com/view/rascal-does-not-dream-of-bunny-girl-senpai-seishun-buta-yar%c5%8d-anime-head-pat-rest-gif-17747839',
  'https://tenor.com/view/anime-pat-smile-cute-blush-gif-16456868',
  'https://tenor.com/view/anime-smile-head-pat-bed-gif-16243971',
  'https://tenor.com/view/ao-haru-ride-anime-boy-anime-girl-anime-couple-couple-gif-13576017',
  'https://tenor.com/view/kotarou-gakuen-babysitters-pat-head-sleepy-gif-11648944',
  'https://tenor.com/view/tate-no-yuusha-no-nariagari-the-rising-of-the-shield-hero-naofumi-fitoria-shield-hero-gif-14043105',
  'https://tenor.com/view/anime-anime-head-rub-anime-head-pat-anime-couple-anime-snuggle-gif-16085314',
'https://giphy.com/gifs/eyes-white-L2z7dnOduqEow',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_12.gif',
  'https://tenor.com/view/pat-head-loli-dragon-anime-gif-9920853',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_0.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_1.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_10.gif'
,];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para fazer cafuné!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Cafuné ')
        .setColor('#000000')
        .setDescription(`${message.author} **fez cafuné em** ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
