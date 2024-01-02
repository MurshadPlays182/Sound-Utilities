const Discord = require('discord.js')

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    var help = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Command List`)
    .addField(`About this bot`, 'Awesome Moderation bot for Murshad\'s Server')
    .setDescription('Prefix: `>`')
    .addField(`Information`, '\`ping\` | \`membercount\` | \`av\` | \`time\` | \`totalban\` | \`membercount\` | \`userinfo\`')
    .addField(`Utilities`, '\`lock\` | \`unlock\` | \`sm\` | \`slowmode\` | \`snipe\` | \`ping\` | \`purge\` | \`clear\` |')
    .addField(`Moderation`, '\`ban\` |  \`unban\` | \`kick\` | \`Lockdown\` | \`nickname\` | \`nick\` | \`snipe\` | \`voicekick\` | \`mute\` | \`unmute\` | \`warn\` | \`warnings\` | \`checkwarn\` | \`clearwarnings\` |')
    msg.channel.send(help)
}