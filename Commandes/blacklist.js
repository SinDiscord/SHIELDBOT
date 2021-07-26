const Discord = require("discord.js");
const fs = require("fs");
const bdd = require("./bl.json");
const color = require("./cmd_colors.json");

module.exports.run = (bot, message, args) => {

    message.delete()
    
    function Savebdd() {
        fs.writeFile("./bl.json", JSON.stringify(bdd, null, 4), (err) => {
            if (err) message.channel.send("Une erreur est survenue.");
        }); 
    }

    const target = message.mentions.members.first();

    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`**${message.author.username}**, vous ne pouvez pas blacklist quelqu'un.`)
    }

    if (!target) {
        return message.channel.send(`**${message.author.username}**, Veuillez mentionner la personne que vous souhaitez blacklist.`)
    }

    if (target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, Vous ne pouvez pas vous blacklist.`)
    }
    if(target.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`<@${message.author.id}> vous ne pouvez pas blacklist un modérateur.`)
    }

    let banned = new Discord.MessageEmbed()
    .setAuthor("Action: Blacklist")
    .setDescription(`**Blacklisté:** ${target.user.tag}, (${target.id}) \n**Administrateur:** <@${message.author.id}>`)
    .setColor(color.red)
    .setTimestamp()
    
    if(target) {

        bdd["blacklist"].push(target.id)


        Savebdd();

        target.ban({
            reason: `AGARTHA SHIELD BL : ${message.author.tag}`,
          }).then(() => {
            message.channel.send(banned);
          })

        }
    
}

module.exports.help = {
    name: "bl"
}
