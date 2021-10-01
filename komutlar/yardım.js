const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('811238807692771348') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **Wexy Bot Yardım Menüsüne Hoşgeldiniz** `)
        .setDescription(`
  **» ${prefix}premium-sistemi**   Premium Komutlarını Gösterir.		
  **» ${prefix}ekonomi**  Ekonomi Komutlarını Gösterir.
  **» ${prefix}gif-menü **   Gif Komutlarını Gosterir.
  **» ${prefix}moderasyon** Moderasyon Komutlarını Gösterir.
  **» ${prefix}moderasyon2**   2. Moderasyon Komutlarını Gösterir.
  **» ${prefix}kullanıcı** Kullanıcı Komutlarıni Gösterir.
  **» ${prefix}eğlence ** Eğlence Komutlarını Gösterir.
  **» ${prefix}seviye-yardım **   Seviye Komutlarını Gösterir.
  **» ${prefix}kayıt-sistemi**  Kayıt Komutlarını Gösterir.
  **» ${prefix}koruma-yardım**  Koruma Komutlarını Gösterir.
  **» ${prefix}mute-yardım**  Mute Komutlarını Gösterir.

▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .addField(`» Wexy Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=811238807692771348&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/yaknda) **|** [Oy Linki](http://bit.ly/yaknda) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};