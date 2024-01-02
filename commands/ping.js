exports.run =  async(client, msg, args) => {
    msg.channel.send(`Your current Ping is \`${client.ws.ping}\` ms`);
}