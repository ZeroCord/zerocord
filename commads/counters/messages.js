const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
        config: {
                name: "messages"
                },
                run: async (client, message, args) => {

   let total = db.startsWith("messages_${message.guild.id}_", { sort: ".data" }) 
      let value = 0
    for (let i = 0 ;i < total.length;i++) {  
        value += total[i].data
            }
                     message.channel.send(value) 
                                }
                        } 
