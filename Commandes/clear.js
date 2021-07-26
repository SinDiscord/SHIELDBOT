const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = (bot, message, args) => {

    message.delete()
    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission de clear les messages.");
    if (!args[0]) return message.channel.send("Veuillez indiquer le nombre de messages à supprimer.");
    if (args[0] >= 101) return message.channel.send("Vous ne pouvez pas clear plus de 100 messages à la fois.")

    message.channel.bulkDelete(args[0]).then(() => {

        message.channel.send(`<@${message.author.id}>, ${args[0]} messages ont été supprimés.`).then(msg => msg.delete({ timeout: 2000 }));
    });

    message.guild.channels.cache.get("864490237547905054").send(`💬 **${message.author.tag}** a clear **${args[0]}** messages dans <#${message.channel.id}>.`)
}

module.exports.help = {
    name: "clear"
}
