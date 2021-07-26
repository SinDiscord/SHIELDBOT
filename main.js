const { timeStamp } = require("console");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require ("fs");
const bdd = require("./bl.json");

var token = "4";

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

bot.on("message", message => {

    if(message.content.includes("UwU")) {
        message.delete()
        message.channel.send(`<@${message.author.id}>, votre message a été supprimé car il contenait un mot sur liste noire.`).then(msg => msg.delete({ timeout: 2000 }));
    }
})

bot.on("message", message => {

    if(message.content.includes(" ^^")) {
        message.delete()
        message.channel.send(`<@${message.author.id}>, votre message a été supprimé car il contenait un mot sur liste noire.`).then(msg => msg.delete({ timeout: 2000 }));
    }
})

bot.on("message", message => {

    if(message.content.includes("OwO")) {
        message.delete()
        message.channel.send(`<@${message.author.id}>, votre message a été supprimé car il contenait un mot sur liste noire.`).then(msg => msg.delete({ timeout: 2000 }));
    }
})

bot.on("message", message => {

    if(message.content.includes("owo")) {
        message.delete()
        message.channel.send(`<@${message.author.id}>, votre message a été supprimé car il contenait un mot sur liste noire.`).then(msg => msg.delete({ timeout: 2000 }));
    }
})

bot.on("message", message => {

    if(message.content.includes("uwu")) {
        message.delete()
        message.channel.send(`<@${message.author.id}>, votre message a été supprimé car il contenait un mot sur liste noire.`).then(msg => msg.delete({ timeout: 2000 }));
    }
})

bot.on("message", message => {

    if(message.content.includes("EwE")) {
        message.delete()
        message.channel.send(`<@${message.author.id}>, votre message a été supprimé car il contenait un mot sur liste noire.`).then(msg => msg.delete({ timeout: 2000 }));
    }
})

bot.on("message", message => {

    if(message.content.includes("ewe")) {
        message.delete()
        message.channel.send(`<@${message.author.id}>, votre message a été supprimé car il contenait un mot sur liste noire.`).then(msg => msg.delete({ timeout: 2000 }));
    }
})

bot.on("guildMemberAdd", member => {

    if(bdd["blacklist"].includes(member.id)) {
        member.send(`<@${member.id}>, vous ne pouvez pas rejoindre ce serveur car il vous êtes enregistré dans la liste noire.`)
        member.ban({
            reason: `BLACKLIST AUTOBAN`,
          })
    } else {
        member.guild.channels.cache.get("846358448526721036").send(`**Bienvenue** à toi <@${member.id}> ! N'hésite pas à aller prendre tes <#${"846356951138697276"}> et venir discuter tranquillement avec nous ! 🎉`).then(
            member.guild.channels.cache.get("864489838903033867").send(`**${member.tag}** a rejoint le serveur.`)
        )
    }
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.cache.get("864489838903033867").send(`**${member.tag}** a quitté le serveur.`)
})

bot.on('ready',() => {

    setInterval(() => {
        bot.destroy()
        bot.login(process.env.TOKEN)
        console.warn("Agartha SHIELD a redemarré")
    }, 7200000); 
    })

bot.login(process.env.TOKEN);
