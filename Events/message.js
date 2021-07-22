const Discord = require('discord.js');
const prefix = '$';

module.exports = (bot, message) => {
    if (message.author.bot || message.channel.type === 'dm') { return; }
    if (!message.channel.permissionsFor(bot.user).has('SEND_MESSAGES')) { return; }
    if (!message.content.startsWith(prefix)) { return; }

        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let commande = args.shift();
        let cmd = bot.commands.get(commande);

        if (!cmd) { return; }
            cmd.run(bot, message, args);
};