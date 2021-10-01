const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
var text = args.slice(0).join(' ')
if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir Tag Belirtin!"))
qdb.set(`kayıttag_${message.guild.id}`, text)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Kayıt Tagı ${text} Olarak Ayarlandı! `))
};
exports.conf = {
    aliases: ['kayıt-tag'],
    permLevel: 3
};
exports.help = {
    name: "kayıttag"
}