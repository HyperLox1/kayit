const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//HyBot
  let abone = message.mentions.members.first()
  let rol = ayarlar.vipROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return
   if(!abone) return message.channel.send('Vip vereceğin kişiyi etiketlemelisin.')
  var role = message.guild.roles.find(role => role.id === rol); 
  abone.addRole(role);
  let embed = new Discord.RichEmbed()
  .setTitle(` • __\` Vip Rolü Başarıyla Verildi \`__   `)
  .setDescription(`• __**\` Yetkili \`**__ ${message.author}`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip-ver'],
  permLevel: 0
};

exports.help = {
  name: 'vipver'
};
//HyBots