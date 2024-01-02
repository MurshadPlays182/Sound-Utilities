const { Client, Message, MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return;
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!user) return message.reply('Please provide a valid user!');
        var member;
        try {
            member = await message.guild.members.fetch(user)
        } catch (err) {
            member = null;
        }
        if (member) {
            if (member.hasPermission('MANAGE_MESSAGES')) return message.reply('You cannot change nickname of a moderator bruh')
        }

        let nickname = args.slice(1).join(" ")
        if (nickname) {
            await user.setNickname(nickname)
            message.channel.send(`Nickname set to \`${nickname}\`.`);
        }

        const channel = message.guild.channels.cache.get('1186800784071995422') // your log channel here
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Nicknamed a member.')
        .addField('User:', `${user}`)
        .addField('Nicknamed by:', `${message.author}`)
        .addField('New nickname:', `${nickname}`)
        channel.send(embed)



    }
