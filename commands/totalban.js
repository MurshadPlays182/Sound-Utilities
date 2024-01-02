const { Client, Message, MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return;

    const fetchBans = message.guild.fetchBans();
    const bannedMembers = (await fetchBans)
    .map((member) => `\`${member.user.tag}\``)
    .join("\n");
	message.guild.fetchBans().then((bans) => {
		message.channel.send(`${bans.size} Members Are Banned From the server `);
    message.channel.send(
        new MessageEmbed()
        .setTitle(`List of banned users!`)
        .setDescription(bannedMembers)

        .setColor('RANDOM')
    )
  })
}
