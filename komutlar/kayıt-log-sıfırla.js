const Discord = require('discord.js');
const qdb = require('quick.db');
module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
qdb.delete(`kayıtlog_${message.guild.id}`)
return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":white_check_mark: Başarılı!")
    .setDescription(`Botda Kullanılan Kayıt Log Sistemi Sıfırlandı Artık Log Mesajı Kayıt Kanalına Gelcek!`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )
};
module.exports.conf = {aliases: [], permLevel: 3};
module.exports.help = {name: "kayıt-log-sıfırla"};

