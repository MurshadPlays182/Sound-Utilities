const { MessageEmbed } = require('discord.js');

exports.run = async(client, msg, args) => {

		const user = message.mentions.members.first()
			|| message.guild.members.cache.get(args[0])
			|| message.member;

		let status;
		switch (user.presence.status) {
		case 'online':
			status = 'online';
			break;
		case 'dnd':
			status = 'dnd';
			break;
		case 'idle':
			status = 'idle';
			break;
		case 'offline':
			status = 'offline';
			break;
		default:
			status = 'Unknown';
		}


		if(message.channel.id !== "1182994441821224971"){ // your id here
			message.delete()
			message.reply("This command is disabled in this channel use <#1182994441821224971>")
			return;
			}
		const embed = new MessageEmbed()
			.setTitle(`${user.user.username} stats`)
			.setColor('#f3f3f3')
			.setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
			.addFields(
				{
					name: 'Name: ',
					value: user.user.username,
					inline: true,
				},
				{
					name: '#️⃣ Discriminator: ',
					value: `#${user.user.discriminator}`,
					inline: true,
				},
				{
					name: '🆔 ID: ',
					value: user.user.id,
				},
				{
					name: 'Current Status: ',
					value: status,
					inline: true,
				},
				{
					name: 'Activity: ',
					value: user.presence.activities[0] ? user.presence.activities[0].name : 'User isn\'t playing a game!',
					inline: true,
				},
				{
					name: 'Avatar link: ',
					value: `[Click Here](${user.user.displayAvatarURL()})`,
				},
				{
					name: 'Creation Date: ',
					value: user.user.createdAt.toLocaleDateString('en-us'),
					inline: true,
				},
				{
					name: 'Joined Date: ',
					value: user.joinedAt.toLocaleDateString('en-us'),
					inline: true,
				},
				{
					name: 'User Roles: ',
					value: user.roles.cache.map((role) => role.toString()).join(' ,'),
					inline: true,
				},
			);

		return message.channel.send(embed);
	}