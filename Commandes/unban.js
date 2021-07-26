const Discord = require('discord.js');
const color = require("./cmd_colors.json");

module.exports.run = (client, message, args) => {

message.delete()    

if(!message.member.hasPermission("BAN_MEMBERS")) {
    return message.channel.send(`<@${message.author.id}>, vous n'avez pas la permission de débannir les membres.`)
  }
  
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
    return message.channel.send(`<@${message.author.id}>, je n'ai pas la permission de débannir cet utilisateur.`)
  }

  
  let userID = args[0]
    message.guild.fetchBans().then(bans=> {
    if(bans.size == 0) return 
    let bUser = bans.find(b => b.user.id == userID)
    if(!bUser) return message.channel.send(`<@${message.author.id}>, le membre n'est pas banni.`)

    let unbanned = new Discord.MessageEmbed()
    .setAuthor("Action: Débannissement")
    .setDescription(`**Débanni:** ${bUser.user.tag}, (${bUser.user.id}) \n**Moderateur:** <@${message.author.id}>`)
    .setColor(color.bleu)
    .setTimestamp()

    message.guild.members.unban(bUser.user)
    message.channel.send(unbanned)
    message.guild.channels.cache.get("864490237547905054").send(`🔨 **${message.author.tag}** a débanni **${bUser.user.tag}**`)
    })

    
}

module.exports.help = {
    name: "unban"
}
