module.exports = async bot => {
     console.log(`${bot.user.username} is online`)
    bot.user.setActivity("c?help • " + bot.guilds.size + " servers" , {type: "PLAYING"})

}
