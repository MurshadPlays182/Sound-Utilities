const Discord = require("discord.js"); // Require important constants
const ms = require('ms');
const randomString = require('randomstring');
 
exports.run = async(client, msg, args) => {
    var logs = msg.guild.channels.cache.find(c => c.id === '1186800784071995422'); // Define logging channel
    
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return; // Check for required permissions
 
    var target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!target) return msg.reply('Please Mention a User for me to Mute!')
 
    var main = msg.guild.roles.cache.find(role => role.name === 'Members'); // Main role that you have
    var muteRole = msg.guild.roles.cache.find(role => role.name === 'Muted'); // Your mute role
 
    var targetID = msg.guild.members.cache.get(target.id)
    function formatAMPM(date) {
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var ampm = hours >12 ? 'pm' : 'am';
        hours = hours % 12
        hours = hours ? hours : 12;
        minutes = minutes <10 ? '0' + minutes : minutes
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    
        const authorID = msg.author.id
        const today = new Date()
        const time = (today.getMonth()+ 1) + '/' + today.getDate() + '-' + today.getFullYear() + " at " + formatAMPM(new Date)
    
        const punishmentID = randomString.generate(20)
        punishmentIDE = [`${punishmentID}`]

    if(!args[1]) {
        
        targetID.roles.add(muteRole)
        targetID.roles.remove(main)
        var confirmation = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`**<@${targetID.user.id}>** has been **Muted** | \`${targetID.user.id}\``)
        msg.channel.send(confirmation);
        var channel = msg.guild.channels.cache.find(c => c.id === '1186800784071995422');//ADD YOUR log hcannel id here
        var log = new Discord.MessageEmbed()
        
         .setColor('RED')
        .setTitle("A Member Was Muted")
        .setDescription("Muted Information Displayed Below:")
        .addField("Member Muted:", `<@${targetID.user.id}> **|** \`${targetID.user.id}\``)
        .addField("Moderator:", `<@${authorID}> **|** \`${authorID}\``)
        .addField("Punishment ID:", `\`${punishmentID}\``)
        .addField("Time", time)
        channel.send(log)
 
    var userLog = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`You were muted in Murshad\'s Server`)
    .addField("Server:", 'Murshad\'s Server') //delete Murshad and write ur name
    .addField("Punishment ID:", `\`${punishmentID}\``)
    .addField("Time", time)
 
    try {
        await target.send(userLog);
    } catch(err) {
        console.warn(err);
    }
 
    
        return
    }
    
    targetID.roles.add(muteRole)
    targetID.roles.remove(main)
    
    var confirmation = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**<@${targetID.user.id}>** has been **Muted** | \`${targetID.user.id}\``)
    msg.channel.send(confirmation);
 
    
    var log = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("A Member Was Muted")
    .addField("Server:", 'Murshad\'s Server') //delete Murshad and write ur server name
    .addField('Expires in:' , ms(ms(args[1])))
    .addField("Punishment ID:", `\`${punishmentID}\``)
    .addField("Time", time)
    log.send(log)
 
    var userLog = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setTitle(`You were Muted in Murshad\'s Server`)
    .addField("Server:", 'Murshad\'s Server') //delete Murshad and write ur server name
    .addField('Expires in:' , ms(ms(args[1])))
    .addField("Punishment ID:", `\`${punishmentID}\``)
    .addField("Time", time)
    try {
        await target.send(userLog);
    } catch(err) {
        console.warn(err);
    }
 
    setTimeout(function () {
        targetID.roles.remove(muteRole)
        targetID.roles.add(main)
    } , ms(args[1]));
 
}
