const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
var gif = args.slice(0).join(' ')
if(!gif) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir Gif Veya Foto Belirtin!"))
qdb.set(`kayıtgif_${message.guild.id}`, gif)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Kayıt Gifi ${gif} Olarak Ayarlandı! `))
};
exports.conf = {
    aliases: ['kayıt-gif'],
    permLevel: 3
};
exports.help = {
    name: "kayıtgif"
}