const Discord = require("discord.js")

exports.run = async(client, msg, args) => {

    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    if(!args[0]) return msg.reply('You need to specify a time for me to set the slowmode to!')
    if(isNaN(args[0])) return msg.reply('You need to specify a valid number for me to set the slowmode to!');
    var time = args[0]
    if(args[0] < 0) return msg.reply('You need to set the number to a postive number (0+) for me to set the slowmode to.');
    if (args[0] > 21600) return msg.reply('You can\'t set slowmode over `21600+` seconds.');
    msg.channel.setRateLimitPerUser(time)
 
    msg.channel.send(`Slowmode set to ${time}\` seconds.`)
 
    var channel = msg.guild.channels.cache.find(c => c.id === '1186800784071995422'); // channel log 
    var log = new Discord.MessageEmbed()
    .setColor('0x6666ff')
    .setDescription(`${msg.author} has set slowmode to ${time} in ${channel}`)
    channel.send(log);
}
    