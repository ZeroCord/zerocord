const cfg = require("../../botconfig.json");
let fs = require("fs")
const db = require('quick.db') 
const BigInt = require("big-int") 

module.exports = async (bot, message) => {
  if (message.author.bot) return;

  if(message.author.bot) return;
    if(message.channel.type === "dm") return      
    
    let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = "c?"
    if(message.author.bot || message.channel.type === "dm") return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)
}
