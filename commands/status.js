const discord = require("discord.js")
exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;
  
    //ARGUMENT
     if(!args.length) {
      return message.channel.send("Please give status message")
    }
    
 client.user.setActivity(args.join(" ")); 
 message.channel.send("Updated the bot status")

    
  }
