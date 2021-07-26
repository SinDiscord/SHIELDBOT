const Discord = require("discord.js")
const fs = require("fs");
const color = require("./cmd_colors.json");

module.exports.run = (bot, message, args) => {

    message.delete()
    
    let member = message.mentions.members.first() || message.member

    let embed = new Discord.MessageEmbed()

    .setColor(color.purple)
    .setThumbnail(member.user.avatarURL({dynamic: true}))
    .setAuthor(`Voici les informations de ${member.user.tag} :`)
    .addField("Nom:", "`" + `${member.user.tag}` + "`")
    .addField("ID:", "`" + member.user.id + "`")
    .addField("Statut:", "`" + member.user.presence.status + "`")
    .addField("Compte créé le:", "`" + member.user.createdAt.toLocaleString() + "`")
    .setTimestamp()
    .setFooter("Demandé par " + message.author.tag + "| Agartha 🌟")

    message.channel.send(embed)

}

module.exports.help = {
    name: "ui"
}
