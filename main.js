const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require ("fs");

var token = "ODY3NTE3ODE2OTA3NjI4NTc0.YPiQ7Q.hSZ4CxWaeJBxYZqpoUsIa88Mehs";

bot.commands = new Discord.Collection();

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }

    f.forEach((f) => {
        let events = require(`./Events/${f}`);
        let event = f.split('.')[0];
        bot.on(event, events.bind(null, bot));
    })
});

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            bot.commands.set(commande.help.name, commande);
        })
})

bot.login(process.env.TOKEN);
