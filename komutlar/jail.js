const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//HyBot
  let jailli = message.mentions.members.first()
  let sebep = args.slice(1).join(' ')
  let rol = ayarlar.jailROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu işlemi sadece yetkililer yapabilir')
   if(!jailli) return message.channel.send('Jaile atacağın kişiyi etiketlemelisin.')
  if(!sebep) return message.channel.send('Jail sebebini belirtmelisin.')
  
  var role = message.guild.roles.find(role => role.id === rol); 
  jailli.addRole(rol);
  
  let embed2 = new Discord.RichEmbed()
  .setThumbnail(jailli.user.avatarURL)
  .setImage('https://media.giphy.com/media/VPC0q2XppSEk8/giphy.gif')
  .setTitle(` • __\`Bir Kullanıcı Jaile Atıldı \`__   `)
  .setDescription(`
 • __**\`Yetkili\`**__ ${message.author}
 • __**\`Kullanıcı\`**__ ${jailli} 

 • __**\`Jaile Atılma Sebebi\`**__ \n• __\`${sebep}\`__

`)
  
  let embed = new Discord.RichEmbed()
  .setTitle(`  • __\`Kullanıcı Başarıyla Jaile Atıldı\`__   `)
  .setDescription(` • __**\`Yetkili\`**__ ${message.author}`)
  .setImage('https://media.giphy.com/media/48FhEMYGWji8/giphy.gif')
  client.channels.get(ayarlar.jailLOG).send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jail-ver'],
  permLevel: 0
};

exports.help = {
  name: 'jail'
};
//HyBot