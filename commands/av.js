const Discord = require('discord.js');
const config = require('../config.json');
const bot = new Discord.Client();

exports.run = async(client, message, args) => {

        if(message.channel.id !== "1182994441821224971"){ // your channel id where you can run this 
            message.delete()
            message.reply("This command is disabled in this channel use <#1182994441821224971>")
            return;
            }


    let target = message.mentions.members.first() || message.member
    if(!target) return message.reply(`No User Mentioned !`)




   const avembed = new Discord.MessageEmbed()
   .setTitle(`AVATAR OF ${target.user.tag}`)
   .setColor("RED")
   .setImage(target.user.displayAvatarURL({dynamic : true , size: 4096 ,format:"png"}))
   .setFooter(`Requested by ${message.author.tag}`)
   .setTimestamp()
   
    message.channel.send(avembed)
    }


