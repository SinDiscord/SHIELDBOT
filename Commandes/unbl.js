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


    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`<@${message.author.id}>, vous ne pouvez pas retirer cet utilisateur de la liste noire.`)
    }

    let userID = args[0]

    if(!userID) return;

    if(userID) {

    let _UserID = bdd["blacklist"].indexOf(userID)

    bdd["blacklist"].splice(_UserID)

    message.channel.send(`<@${userID}> a été retiré de la blacklist.`)

    message.guild.fetchBans().then(bans=> {
        if(bans.size == 0) return 
        let bUser = bans.find(b => b.user.id == userID)
        message.guild.members.unban(bUser.user)
    })
    
    }

    Savebdd()
}

module.exports.help = {
    name: "unbl"
}
