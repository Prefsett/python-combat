const { Bot, Keyboard, Markup } = require("grammy");
const Data = require("./data.js");

class TelegramBot {
  constructor(TOKEN) {
    if (TelegramBot.instance) return TelegramBot.instance;
    TelegramBot.instance = this;

    this.bot = new Bot(TOKEN);
    this.urlApp = "t.me/pityhon_combat_bot/webapp";

    this.data = new Data("user.json");

    this.bot.command("start", async (ctx) => {
      console.log(ctx.from);

      const massage = `Hello, @${ctx.from.username}, u can start play Python-Combat now. Start playing...`;
      const replyObj = {
        reply_markup: {
          inline_keyboard: [[{ text: "Start play", url: this.urlApp }]],
        },
      };

      await this.data.setData(ctx.from);
      await ctx.reply(massage, replyObj);
    });
  }

  start() {
    this.bot.start();
  }
}

module.exports = { TelegramBot };
