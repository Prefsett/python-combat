require("dotenv").config();
const { TelegramBot } = require("./bot");

const bot = new TelegramBot(process.env.TOKEN);
bot.start();
