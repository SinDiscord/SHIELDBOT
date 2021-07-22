const  Discord = require("discord.js")
const fs = require("fs");

module.exports.run = (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Agartha SHIELD Helping Menu:")
    .setColor("#C891FC")
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .setFooter(`Requested by ${message.author.username} | Agartha 🌟`)

    
    message.channel.send(embed)
}

module.exports.help = {
    name: "help"
}