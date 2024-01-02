const Discord = require("discord.js");
const randomString = require('randomstring')

exports.run = async(client, message, args) => {

 
        
    if(!message.member.hasPermission('BAN_MEMBERS')) return; // this is the permission
    
    var member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.reply('You did not mention a user for me to punish!');
    var member;
    try {
        member = await message.guild.members.fetch(member)
    } catch(err) {
        member = null;
    }
    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return message.reply('You can not ban this staff member');

    }


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
    
        const authorID = message.author.id
        const today = new Date()
        const time = (today.getMonth()+ 1) + '/' + today.getDate() + '-' + today.getFullYear() + " at " + formatAMPM(new Date)

        const punishmentID = randomString.generate(20)
        punishmentIDE = [`${punishmentID}`]

    var reason = args.splice(1).join(' ');
    if(!reason) return message.reply('I cannot Punish the User Without a Reason!')
    var channel = message.guild.channels.cache.find(c => c.id === '1186800784071995422');//ADD YOUR log hcannel id here
    var log = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("A Member Was Banned")
    .setDescription("Banned Information Displayed Below:")
    .addField("Member Banned:", `${user}> **|** \`${user}\``)
    .addField("Moderator:", `<@${authorID}> **|** \`${authorID}\``)
    .addField("Reason:", `\`${reason}\``)
    .addField("Punishment ID:", `\`${punishmentID}\``)
    .addField("Time", time)
    channel.send(log)

    var userLog = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`You were Banned in Murshad\'s Server`)
    .addField("Server:", 'Murshad\'s Server ') //delete the Murshad's server  and write ur server here
    .addField("Reason:", `${reason}`)
    .addField("Punishment ID:", `\`${punishmentID}\``)
    .addField("Time", time)
    try {
        await user.send(userLog);
    } catch(err) {
        console.warn(err);
    }
    message.guild.members.ban(user);
    var confir = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**<@${member.user.id}> **has been **Banned** | \`${member.user.id}\``)

    message.channel.send(confir);
message.delete();
}

    