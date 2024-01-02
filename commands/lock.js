const Discord = module.require("discord.js");

exports.run = async(client, message, args) => {

     let channel = message.channel;
     const contenta = args[0]
    
     if (!contenta) return message.reply('Specify a reason for me to lock')

   if (!message.member.hasPermission('MANAGE_CHANNELS') || !message.guild.owner) {
   return
   }
   if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) {
     return message.channel.send("I Don't Have Enough Powers To Lock! Missing Perms: `MANAGE_CHANNELS`")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ]).then(() => {

    });
   const embed = new Discord.MessageEmbed()
   .setColor('AQUA')
   .setTitle('**Channel Locked**')
   .setDescription('__You are not muted, noone can talk.__\n\n Please do not contact any staff members to ask why, updates will be posted here eventually. More information')
   .addField("Reason:", `${contenta}`)
   await message.channel.send(embed);
   message.delete();
   }
  