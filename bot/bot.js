const { Bot, Keyboard, Markup } = require("grammy");
const Data = require("./data.js");

class TelegramBot {
  constructor(TOKEN) {
    if (TelegramBot.instance) return TelegramBot.instance;
    TelegramBot.instance = this;

    this.data = new Data("user.json");
    this.data.getData();

    this.bot = new Bot(TOKEN);
    this.urlApp = "t.me/pityhon_combat_bot/webapp";

    this.bot.command("start", async (ctx) => {
      console.log(ctx.from);
      await this.data.setData(ctx.from);

      await ctx.reply("Привет", {
        reply_markup: {
          inline_keyboard: [[{ text: "Начать играть", url: this.urlApp }]],
        },
      });
    });
  }

  start() {
    this.bot.start();
  }
}

module.exports = { TelegramBot };
