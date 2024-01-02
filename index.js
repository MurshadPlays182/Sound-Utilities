const config = require('./config.json');
const Discord = require('discord.js')
const ms = require('ms');
const client = new Discord.Client();
const Fs = require('fs');

client.on('ready',  async() => {
    console.log('Bot is now Online!')
    const statusArray = ['the news, LISTENING', `Spotify, LISTENING` ,`FIVEM, PLAYING` , 'YT, WATCHING' , 'for rule breakers,  WATCHING', `Everyone, WATCHING` , 'Giveaways, WATCHING', 'COVID-19, WATCHING' ,`#general chat, WATCHING`, 'YOUTUBE, WATCHING', `no, PLAYING`]
    setInterval(() => {
    const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
    const status = random[0]
    const mode = random[1]
    client.user.setActivity(status, {type: mode})
    }, 16000)
  
}) 

client.events = new Discord.Collection();
require('./handlers/event_handler')(client);
 
    client.on('message', async(msg) => {

    if(msg.content.length >= 300 && !msg.member.hasPermission('ADMINISTRATOR')) {
        var emojiGuild = client.guilds.cache.find(guild => guild.name === 'Murshad\'s Server')//ADD YOUR Server NAME HERE
        var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')
    msg.delete();
    msg.reply(`${animebonk} you are not allowed to send bulks messages. Continuing will result in a mute..`)
    var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            

    if(!warnsJSON[msg.author.id]) {
        warnsJSON[msg.author.id] = {
            warns: 0
        }

        Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
    }

    warnsJSON[msg.author.id].warns += 1
    Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))


    setTimeout(function() {

        warnsJSON[msg.author.id].warns -= 1
        Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
    }, ms('24h'))

    var warnEm = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setTitle(`You've been warned in ${msg.guild.name}`)
    .setDescription('You have recieved a warning from the moderation system')
    .addField('Reason' , '[AutoMod] Sending bulks.')
    .addField('Expires' , '1 day')

    try {
        msg.author.send(warnEm)

    } catch(err) {

    }


    if(Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
        var mutedEm = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setDescription(`${msg.member.user.username} has been muted for continuous infractions`)
        msg.channel.send(mutedEm)

        const muteRole = msg.guild.roles.cache.find(r => r.name === 'Muted') // role name
        const user = msg.member
        user.roles.add(muteRole.id)

        var yougotmuted = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle(`You've been muted in ${msg.guild.name}`)
        .setDescription('You have been muted after 3 infractions')
        .addField('Reason' , '[Automod] Exceeding 3 warnings.')
        .addField('Expires' , '6 hours')

        try {

            msg.author.send(yougotmuted)

        }catch(err) {

        }

        setTimeout(function () {
            user.roles.remove(muteRole.id)
        }, ms('6h')); 

    }
return;
}



if(msg.content === "!verify" && msg.channel.id === "1177929678875533372") { //ADD YOUR VERIFY CHANNEL ID HERE
    msg.delete()
    const verified = msg.guild.roles.cache.find(r => r.name === "Verified")
    msg.member.roles.add(verified)
}
if(msg.channel.id === "1177929678875533372" && msg.content !== "!verify") {
    return msg.delete()
}


if(msg.mentions.users.size > 4 && !msg.member.hasPermission('MANAGE_MESSAGES')) {
    var emojiGuild = client.guilds.cache.find(guild => guild.name === 'Murshad\'s Server')//ADD YOUR Server NAME HERE
    var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')


msg.delete()
 msg.reply(`${animebonk} you are not allowed mention more than **4** people. Continuing will result in a mute.`)
var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
        

if(!warnsJSON[msg.author.id]) {
    warnsJSON[msg.author.id] = {
        warns: 0
    }

    Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
}

warnsJSON[msg.author.id].warns += 1
Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))


setTimeout(function() {

    warnsJSON[msg.author.id].warns -= 1
    Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
}, ms('24h'))

var warnEm2 = new Discord.MessageEmbed()
.setColor('YELLOW')
.setTitle(`You've been warned in ${msg.guild.name}`)
.setDescription('You have recieved a warning from the moderation system')
.addField('Reason' , '[Automod] Mentioning more than 4 people.')
.addField('Expires' , '1 day')

try {
    msg.author.send(warnEm2)

} catch(err) {

}


if(Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
    var mutedEm2 = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setDescription(`${msg.member.user.username} has been muted for continuous infractions`)
    msg.channel.send(mutedEm)

    const muteRole = msg.guild.roles.cache.find(r => r.name === 'Muted') // role name 
    const user = msg.member
    user.roles.add(muteRole.id)

    var yougotmuted2 = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setTitle(`You've been muted in ${msg.guild.name}`)
    .setDescription('You have been muted after 3 infractions')
    .addField('Reason' , '[Automod] Exceeding 3 warnings.')
    .addField('Expires' , '6 hours')

    try {

        msg.author.send(yougotmuted2)

    }catch(err) {

    }

    setTimeout(function () {
        user.roles.remove(muteRole.id)
    }, ms('6h'));

}
return;
} 




    
    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
      };
      var testContent = msg.content;
      if(isValidURL(testContent) && !msg.member.hasPermission('MANAGE_MESSAGES') && msg.channel.id  !==('ADMINISTRATOR')) {
        var emojiGuild = client.guilds.cache.find(guild => guild.name === 'Murshad\'s Server')//ADD YOUR Server NAME HERE
        var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')    

          msg.delete();
         msg.reply(`${animebonk} you are not allowed to send links in this channel. Continuing will result in a mute.`)
         var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            

         if(!warnsJSON[msg.author.id]) {
             warnsJSON[msg.author.id] = {
                 warns: 0
             }

             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }

         warnsJSON[msg.author.id].warns += 1
         Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))


         setTimeout(function() {

             warnsJSON[msg.author.id].warns -= 1
             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }, ms('24h'))

         var warnEm8 = new Discord.MessageEmbed()
         .setColor('YELLOW')
         .setTitle(`You've been warned in ${msg.guild.name}`)
         .setDescription('You have recieved a warning from the moderation system')
         .addField('Reason' , '[AutoMod] Sending links.')
         .addField('Expires' , '1 day')

         try {
             msg.author.send(warnEm8)

         } catch(err) {

         }


         if(Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
             var mutedEm9 = new Discord.MessageEmbed()
             .setColor('YELLOW')
             .setDescription(`${msg.member.user.username} has been muted for continuous infractions`)
             msg.channel.send(mutedEm9)

             const muteRole = msg.guild.roles.cache.find(r => r.name === 'Muted') //role name
             const user = msg.member
             user.roles.add(muteRole.id)

             var yougotmuted19 = new Discord.MessageEmbed()
             .setColor('YELLOW')
             .setTitle(`You've been muted in ${msg.guild.name}`)
             .setDescription('You have been muted after 3 infractions')
             .addField('Reason' , '[Automod] Exceeding 3 warnings.')
             .addField('Expires' , '6 hours')

             try {

                 msg.author.send(yougotmuted19)

             }catch(err) {

             }

             setTimeout(function () {
                 user.roles.remove(muteRole.id)
             }, ms('6h'));
   
         }
     return;
     }
    
    
    
    
    
    
    

        try{
            var mentionedUser = msg.mentions.users.first()
    
            if(mentionedUser.id === '727290009106907286' && !msg.member.hasPermission('MANAGE_MESSAGES')) {
                var emojiGuild = client.guilds.cache.find(guild => guild.name === 'Murshad\'s Server')//ADD YOUR Server NAME HERE
                var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')    
                msg.delete()
                msg.reply(`${animeBonk}  you are not allowed to ping Murshad. He is unable to respond to all pings here.`)
    
                var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            

                if(!warnsJSON[msg.author.id]) {
                    warnsJSON[msg.author.id] = {
                        warns: 0
                    }
        
                    Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
                }
        
                warnsJSON[msg.author.id].warns += 1
                Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
        
        
                setTimeout(function() {
        
                    warnsJSON[msg.author.id].warns -= 1
                    Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
                }, ms('24h'))
        
                var warnEm0 = new Discord.MessageEmbed()
                .setColor('YELLOW')
                .setTitle(`You've been warned in ${msg.guild.name}`)
                .setDescription('You have recieved a warning from the moderation system')
                .addField('Reason', 'Pinging Murshad')
                .addField('Additional Information' , 'You are not allowed to ping Murshad. Due to some other work. he does not have the time to respond to pings.')
                .addField('Expires' , '1 day')
        
                try {
                    msg.author.send(warnEm0)
        
                } catch(err) {
        
                }
        
        
                if(Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
                    var mutedEm3 = new Discord.MessageEmbed()
                    .setColor('YELLOW')
                    .setDescription(`${msg.member.user.username} has been muted for continuous infractions`)
                    msg.channel.send(mutedEm)
        
                    const muteRole = msg.guild.roles.cache.find(r => r.name === 'Muted') // role name
                    const user = msg.member
                    user.roles.add(muteRole.id)
        
                    var yougotmuted0 = new Discord.MessageEmbed()
                    .setColor('YELLOW')
                    .setTitle(`You've been muted in ${msg.guild.name}`)
                    .setDescription('You have been muted after 3 infractions')
                    .addField('Reason' , '[Automod] Exceeding 3 warnings.')
                    .addField('Expires' , '6 hours')
        
                    try {
        
                        msg.author.send(yougotmuted0)
        
                    }catch(err) {
        
                    }
        
                    setTimeout(function () {
                        user.roles.remove(muteRole.id)
                    }, ms('6h'));
          
                }
              }
                
            }catch(err){
                 
            } 
        
    
 

            var array = ['fuck' , 'fck' , 'motherfucker' , 'mtherfcker' , 'fcker' , 'bitch' , 'dick' , 'penis' , 'hell' , 'bloody hell' , 'nudes' , 'nudity' , 'fcking' , 'shit' , 'ass' , 'fak' , 'bich' , 'gay' , 'f u c k' , 'nigga']; //add here if you want to add
            if(array.some(w =>  ` ${msg.content.toLowerCase()} `.includes(` ${w} `) && !msg.member.hasPermission('MANAGE_MESSAGES'))){
            var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')                                                                                  

            msg.delete()
            msg.reply(`${animebonk} you are not allowed to send prohibited words in this channel. Continuing will result in a mute.`)
            var warnsJSON = JSON.parse(Fs.readFileSync(' ./warnInfo.json'))
            

            if(!warnsJSON[msg.author.id]) {
                warnsJSON[msg.author.id] = {
                    warns: 0
                }

                Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
            }

            warnsJSON[msg.author.id].warns += 1
            Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))


            setTimeout(function() {

                warnsJSON[msg.author.id].warns -= 1
                Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
            }, ms('24h'))

            var warnEm1 = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle(`You've been warned in ${msg.guild.name}`)
            .setDescription('You have recieved a warning from the moderation system')
            .addField('Reason' , '[AutoMod] Sending prohibited words.')
            .addField('Expires' , '1 day')

            try {
                msg.author.send(warnEm1)

            } catch(err) {

            }


            if(Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
                var mutedEm8 = new Discord.MessageEmbed()
                .setColor('YELLOW')
                .setDescription(`${msg.member.user.username} has been muted for continuous infractions`)
                msg.channel.send(mutedEm8)

                const muteRole = msg.guild.roles.cache.find(r => r.name === 'Muted') //role name
                const user = msg.member
                user.roles.add(muteRole.id)

                var yougotmuted16 = new Discord.MessageEmbed()
                .setColor('YELLOW')
                .setTitle(`You've been muted in ${msg.guild.name}`)
                .setDescription('You have been muted after 3 infractions')
                .addField('Reason' , '[Automod] Exceeding 3 warnings.')
                .addField('Expires' , '6 hours')

                try {

                    msg.author.send(yougotmuted16)

                }catch(err) {

                }

                setTimeout(function () {
                    user.roles.remove(muteRole.id)
                }, ms('12h'));
			
            }
        return;
        }
            
        
        
    
    var prefix = config.prefix;
    if(!msg.content.toLowerCase().startsWith(prefix)) return;
 
    var args = msg.content.split(' ')
    var cmd = args.shift().slice(prefix.length).toLowerCase();
    try {
        var file = require(`./commands/${cmd}.js`);
        file.run(client, msg, args);
 
    }catch(err) {
    
        if (msg.content.toLowerCase() === (prefix + 'restart')) {

            if (msg.guild.id !== '1099759358872666152') return;
            if (msg.author.id !== "727290009106907286") return;
        
            msg.reply('Restarting.')
              .then(() => {
                client.destroy()
              }).then(() => {
                client.login(config.token)
              }).then(() => {
                msg.reply('The bot has been restarted')
              })
          }

       


          client.on('guildMemberAdd' , async(member) => {
 
            let warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'));
              warnsJSON[member.id] = {
                            warns: 0
                        }
                        Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON));
            })

    }
})



client.login(config.token);
