const Discord = require("discord.js");
const color = require("./cmd_colors.json")

module.exports.run = (bot, message, args) => {

    message.delete()
    
    let embed = new Discord.MessageEmbed()

    .setColor(color.purple)
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .setAuthor(`Voici les informations à propos de: ${message.guild.name} :`)
    .addField("Nom du serveur:", "`" + message.guild.name + "`")
    .addField("Nom du serveur:", "`" + message.guild.id + "`")
    .addField("ID du propriétaire:", "`" + message.guild.owner.id + "`")
    .addField("Région:", "`" + message.guild.region + "`")
    .addField("Nombre de membres:", "`" + message.guild.memberCount + "`")
    .addField("Créé le:", "`" + message.guild.createdAt.toLocaleString() + "`")
    .addField("Niveau de sécurité:", "`" + message.guild.verificationLevel + "`")
    .setTimestamp()
    .setFooter("Demandé par" + message.author.tag + " | Agartha 🌟")

    message.channel.send(embed)
}

module.exports.help = {
    name: "si"
}
