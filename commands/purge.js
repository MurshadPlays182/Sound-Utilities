const Discord = require('discord.js')
exports.run = async(client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
    if(!args[0]) return message.reply('Please Mention The Number For Messages For Me To Clear');
    if(isNaN(args[0])) return message.reply("Please specify a valid Number")

    if(args[0] > 100) return message.reply("Please Specify A Number Below 100!");
    if(args[0] < 1) return message.reply("Please specify a number greater than 0!");

    message.delete()
    await message.channel.messages.fetch({limit: args[0]}).then (messages => {
        message.channel.bulkDelete(messages);

        var embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${args[0]} Messages cleared`);
        message.channel.send(embed);
    })
 

    var channel = message.guild.channels.cache.find(c => c.id === '1186800784071995422'); // your mute channel id here
    var log = new Discord.MessageEmbed()
    .setColor('0x6666ff')
    .setDescription(`${message.author} has cleared ${args[0]} messages ${channel}`)
    channel.send(log);

}
                    
