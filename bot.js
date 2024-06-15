const { Bot, Keyboard, Markup } = require("grammy");

class TelegramBot {
  constructor(TOKEN) {
    if (TelegramBot.exists) return TelegramBot.instance;

    TelegramBot.instance = this;
    TelegramBot.exists = true;

    this.bot = new Bot(TOKEN);
    this.urlApp = "t.me/pityhon_combat_bot/webapp";

    this.bot.command("start", (ctx) => {
      console.log(ctx.from);
      ctx.reply("Привет", {
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
