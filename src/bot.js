require("dotenv").config();
console.log(process.env.DISCORT_BOT_TOKEN);

const { Client } = require("discord.js");

const client = new Client();



client.login(process.env.DISCORT_BOT_TOKEN);

