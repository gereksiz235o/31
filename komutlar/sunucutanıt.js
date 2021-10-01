const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const ms = require('parse-ms')
exports.run = async(client, message, args) => {

let saat = 43200000 //12 saat girdim ben. Milisaniye cinsinden istediğiniz süreyi girebilirsiniz.
let süre = db.fetch(`csunucutanıt_${message.guild.id}`)

if(süre !== null && saat - (Date.now() - süre) > 0) {

let c = ms(saat - (Date.now() - süre))
const emmbed1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`Sunucunu zaten tanıtmışsın! Lütfen **${c.hours}** saat **${c.minutes}** dakika bekle.`)
message.channel.send(emmbed1)   
} else {
  
  const emmbed3 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`)
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(emmbed3) 

  
let kanal = client.channels.cache.get("822189897682124830") //sunucutanıt mesajları hangi kanala gidecekse idsini yazmalısın

    message.channel.createInvite({maxAge: 0}).then(i => {
let embed = new Discord.MessageEmbed()
.setFooter(`Wexy Sunucu Tanıt`)
.setThumbnail(message.guild.iconURL({dynamic:true}))
.setColor("RANDOM")
.setDescription(`**${message.guild.name}** sunucusu tanıtıldı! Bilgiler;
**Kurucu:**  \`${message.guild.owner.user.tag}\` 
**Tanıtan:** \`${message.author.tag}\`
**Sunucu linki:** https://discord.gg/${i.code}
**Sunucu İdsi:** \`${message.guild.id}\`
**Tanıtılan Sunucu Üye Sayısı :** \`${message.guild.memberCount}\`
**Sunucu Kuruluş Tarihi :** \`${message.guild.createdAt}\`
`)
db.set(`csunucutanıt_${message.guild.id}`, Date.now())
kanal.send(embed)
const emmbed2 = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`Sunucun başarıyla [burada](https://discord.gg/MVhdFapjqA) tanıtıldı! 12 saat sonra tekrar tanıtabilirsin.`)
message.channel.send(emmbed2)  
})  

}}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sunucutanit", "Sunucutanit", "sunucu-tanıt", "sunucu-tanit"],
    permLevel: 0
  };
  
exports.help = {
  name: 'sunucutanıt',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};