const Discord = require("discord.js")
const fs = require("fs");
const color = require("./cmd_colors.json");

module.exports.run = (bot, message, args) => {

    message.delete()
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Agartha SHIELD Help :")
    .setColor(color.purple)
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .setFooter(`Requested by ${message.author.username} | Agartha 🌟`)
    .setTimestamp()
    .setDescription("**$ban** {membre}» `Banni définitivement le membre mentionné.` \n**$unban** {id}» `Débanni le membre identifié.` \n**$bl** {membre}» `Blacklist le membre mentionné du serveur.` \n**$clear** {nombre}» `Supprime le nombre de messages demandé.` \n**$unbl** {id}» `Enlève le membre de la blacklist.` \n**$ui** {mention}» `Donne les informations de la personne.` \n**$si**» `Affiche les informations du serveur.`")
    .setImage("https://media.discordapp.net/attachments/845789334867279883/869338440754401340/banniere_agartha.png?width=1202&height=676")
    
    message.channel.send(embed)
}

module.exports.help = {
    name: "help"
}
