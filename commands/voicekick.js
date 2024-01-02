const Discord = require('discord.js');
const config = require('../config.json');


exports.run = async(client, msg, args) => {

        if (!message.guild.me.hasPermission(["ADMINISTRATOR"])) // permissiosn
        return message.channel.send(
          "Missing Permissions"
        );
  
      if (!message.mentions.members.first())
        return message.channel.send(
          `User Not found`
        );
  
      let { channel } = message.mentions.members.first().voice;
  
      if (!channel)
        return message.channel.send(`User not found`);
  
      message.mentions.members.first().voice.kick();
  
      message.channel.send(`User Kicked!`);
    
    }
