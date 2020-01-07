const Discord = require('discord.js')

module.exports = {
		config: {
				name: "help"
				},
				run: async (client, message, args) => {
 
let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if (prefix === null) prefix = "c?"
     message.channel.send(`ZeroCord's prefix in **${message.guild.name}** is **${prefix}**
Find all ZeroCord commands at http://bit.ly/zerocord-cmds`) 
          let embed = new Discord.RichEmbed()
              .setColor("BLACK")
              .setTitle('Help menu')
              .setDescription(`[Total Commands](http://bit.ly/zerocord-cmds)
[Invite ZeroCord to Servers](https://discordapp.com/oauth2/authorize?client_id=658294671167979570&permissions=8&scope=bot)
[Support Server](https://discord.gg/YckU3Rt)
[Donate me](https://zerocord.glitch.me/donate)`)
              .setFooter('Do c?modules to show all commands/modules')
          message.channel.send(embed)
								}
						} 
