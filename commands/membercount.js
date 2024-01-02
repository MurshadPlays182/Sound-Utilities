const { Client, Message, MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;


    
        const guild = message;
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Total Members in Murshad")
        .setDescription (`Total: ${message.guild.members.cache.size}\n Members: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp()
       
            message.channel.send(embed)
    }
  