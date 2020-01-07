const Discord = require('discord.js')


module.exports = {
		config: {
				name: "membercount",
        aliases: ["memberscount", "mcount"]
				},
				run: async (client, message, args) => {

          let embed = new Discord.RichEmbed()
      
        .setColor("BLACK")
        .setURL('https://zerocord.xyz')
        .setAuthor(`${message.guild.name} Statistics`, `${message.guild.iconURL}  `, 'https://zerocord.xyz')
        .setThumbnail(message.guild.iconURL)
        .addField("Users Count", `${(message.guild.memberCount).toLocaleString()} members`, true)
             message.channel.send(embed)
								}
						}  
