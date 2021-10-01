const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
//antikor ab sağolsun
//antikor ab sağolsun
exports.run = (client, message, args) => {
  try {
    let p = db.fetch(`prefix_${message.guild.id}`)
let prefix = ayarlar.prefix;
if (p) prefix = p;
let kapali = "<:X_Tik:811147172422746143> ";
let acik = "✅";

let botkoruma = db.fetch(`bottemizle_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let capsengel = db.fetch(`capslock_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let cezasistemi = db.fetch(`ceza_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let ddos = db.fetch(`ddos_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let ever = db.fetch(`ever_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let sayaç = db.fetch(`sayac_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let kayıt = db.fetch(`kayıt_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let küfür = db.fetch(`${message.guild.id}.kufur`);//kendinize göre dünlenemeyi unutmayın!!
let log = db.fetch(`modlogK_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let modlog = db.fetch(`modlogKK_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let mute = db.fetch(`muterol_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let otorol = db.fetch(`otorol_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let reklam = db.fetch(`reklam_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!
let saas = db.fetch(`saas_${message.guild.id}`);//kendinize göre dünlenemeyi unutmayın!!

let botkorumaac = kapali
let capsengelac = kapali
let cezasistemiac = kapali
let ddosac = kapali
let everac = kapali
let sayaçac = kapali//antikor ab sağolsun
let kayıtac = kapali
let küfürac = kapali
let logac = kapali//antikor ab sağolsun
let modlogac = kapali
let muteac = kapali
let otorolac = kapali
let reklamac = kapali
let saasac = kapali

if (botkoruma) botkorumaac = acik;
if (capsengel) capsengelac = acik;//antikor ab sağolsun
if (cezasistemi) cezasistemiac = acik;
if (ddos) ddosac = acik;//antikor ab sağolsun
if (ever) everac = acik;
if (sayaç) sayaçac = acik;
if (kayıt) kayıtac = acik;//antikor ab sağolsun
if (küfür) küfürac = acik;
if (log) logac = acik;
if (modlog) modlogac = acik;
if (mute) muteac = acik;
if (otorol) otorolac = acik;
if (reklam) reklamac = acik;
if (saas) saasac = acik;//antikor ab sağolsun

const Embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`** Wexy Bot Ayarlar** \n ${botkorumaac} Bot Koruma Sistemi\n ${capsengelac} CapsLock Engel Sistemi\n ${cezasistemiac} Ceza Sistemi\n ${ddosac} DDOS Koruma Sistemi\n ${everac} Everyone & Here Engel Sistemi\n ${sayaçac} Sayaç Sistemi\n ${kayıtac} Kayıt Sistemi\n ${küfürac} Küfür Engel Sistemi\n ${logac} Log Sistemi\n ${modlogac} ModLog Sistemi\n ${muteac} Mute Sistemi\n ${otorolac} Otorol Sistemi\n ${reklamac} Reklam & Link Engel Sistemi\n ${saasac} Sa-As & Günaydın Sistemi`)
message.channel.send(Embed)
  } catch(err) {
   
      const Embed = new Discord.MessageEmbed()
      .setColor("RED")
      .addField("Bir Hata Oluştu", err)
      message.channel.send(Embed)
       } 
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4//antikor ab sağolsun//antikor ab sağolsun//antikor ab sağolsun//antikor ab sağolsun//antikor ab sağolsun//antikor ab sağolsun//antikor 
};

exports.help = {
  name: 'ayarlar'
};