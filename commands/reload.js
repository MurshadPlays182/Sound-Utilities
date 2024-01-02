const djs = require('discord.js')

exports.run = async(client, msg, args) => {
    //--------Check Permission--------\\
    if(message.author.id !== "727290009106907286") return; // your id here of discord
    
    if(!args[0]) return message.channel.send('You must provide a category name');
    if(!args[1]) return message.channel.send('You must provide a command for me to reload');

    let category = args[0].toLowerCase();
    let commandName = args[1].toLowerCase();

  try { 
     delete require.cache[require.resolve(`../commands/${commandName}.js`)];
     client.commands.delete(commandName);
     const pull = require(`../commands/${commandName}.js`);
     client.commands.set(commandName, pull);
    
    const embed = new djs.MessageEmbed()
 .setTitle('Reload Command')
 .setColor('YELLOW')
 .setDescription(`Successfully reloaded \`${args[1].toUpperCase()}\` command`)
 
   return message.channel.send(embed);
    } catch(e) {
        return message.channel.send(`Error while reloading: \`${args[1].toUpperCase()}\` command`);
    }
    
  }
  
