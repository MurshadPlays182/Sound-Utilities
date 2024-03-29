const { Client, Message, MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
    const member = message.mentions.members.first();

    if (!member) return message.reply("Please specify a member!");

    try {
      member.setNickname(null);
    } catch (err) {
      message.reply(
        "I do not have permission to reset " + member.toString() + " nickname!"
      );
    }
  }
