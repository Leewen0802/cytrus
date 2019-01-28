const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const hook = new Discord.WebhookClient(process.env.LOG_WEBHOOK_ID, process.env.LOG_WEBHOOK_TOKEN);
  hook.send(args.join(' '));
  message.channel.send('Message sent to the Cytrus Logs!');
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'Bot Moderator'
};

exports.help = {
  name: 'send',
  category: 'General',
  description: 'Sends a message to the CytrusLog',
  usage: 'send'
};