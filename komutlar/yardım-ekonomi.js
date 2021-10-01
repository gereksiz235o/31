const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **Wexy Bot  Ekonomi Menüsüne Hoşgeldiniz** `)
        .setDescription(`

  **» ${prefix}soygun** Soygun yaparsınız.
  **» ${prefix}profil** Profil bilgilerinizi gösterir.
  **» ${prefix}altın-yolla**  İstediğiniz kişiye altın yollayabilirsiniz.
  **» ${prefix}altınal** Paranızla altın alıp marketten eşya satın alabilirsiniz.
  **» ${prefix}elmasal**  Altınınızla elmas alıp marketten eşya satın alabilirsiniz.
  **» ${prefix}elmas-yolla** İstediğiniz kişiye elmas yollayabilirsiniz.
  **» ${prefix}günlük** Günlük maaşınızı verir.
  **» ${prefix}market**  Eşya satın alabilirsiniz gösterir.
  **» ${prefix}meslek** Meslek sahibi olarak daha hızlı para kazanabilirsiniz
  **» ${prefix}para-yolla**  İstediğiniz kişiye para yollayabilirsiniz.
  **» ${prefix}soygun** Etiketlediğiniz Kişiden Para Çalarsınız.
  **» ${prefix}kazı-kazan**  Kazı kazan oynarsınız.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
            .addField(`» Wexy Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=811238807692771348&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/FQVadvq) **|** [Oy Linki](http://bit.ly/Quinoy) **|**`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekonomi'],
  permLevel: 0,
};

exports.help = {
  name: 'ekonomi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'oyun'
};