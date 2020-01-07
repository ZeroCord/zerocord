const { Collection, RichEmbed } = require("discord.js");
const { token, database } = require("./botconfig.json");
const fs = require("fs");
const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();
const ownerID = "643510956361515039";
