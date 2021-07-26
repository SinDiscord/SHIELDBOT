const Discord = require("discord.js");
const color = require("./cmd_colors.json");

module.exports.run = (bot, message, args) => {
    
    message.delete()
    
    if (!message.guild) return;
  
      let user = message.mentions.users.first()
    
      if (user) {
       
        let member = message.guild.member(user);
        
        if(!member) return message.channel.send(`<@${message.author.id}>, veuillez mentionner l'utilisateur à bannir.`)
      
        let banned = new Discord.MessageEmbed()
    .setAuthor("Action: Ban")
    .setDescription(`**Membre banni:** ${user.tag}, (${user.id}) \n**Moderateur:** <@${message.author.id}>`)
    .setColor(color.red)
    .setTimestamp()

        if(!message.member.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(`<@${message.author.id}>, vous n'avez pas la permission de bannir.`)
        }

        if(member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`<@${message.author.id}>, vous ne pouvez pas bannir un modérateur.`)
        }

        user.send("Vous avez été **banni définitivement** du serveur **" + message.guild.name + "** par ``" + message.author.tag + "``")
        
        if (member) {
         
          member.ban({
            reason: `AGARTHA SHIELD : ${message.author.tag}`,
          }).then(() => {
            message.channel.send(banned);
          }).catch(err => {
          
            message.channel.send(`<@${message.author.id}>, je ne peux pas bannir ce membre, veuillez réessayer.`); 
            console.error(err);
          });
        } else {
         
          message.channel.send(`Cet utilisateur n'est pas sur le serveur.`);
        }
      } else {
      
        message.channel.send(`Veuillez mentionner la personne à bannir.`);
      }

      
      message.guild.channels.cache.get("864490237547905054").send(`🔨 **${message.author.tag}** a banni **${user.tag}**`)

    }

module.exports.help = {
    name: "ban"
}
