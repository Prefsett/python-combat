require("dotenv").config();
const { TelegramBot } = require("./bot/bot.js");

const bot = new TelegramBot(process.env.TOKEN);
bot.start();
