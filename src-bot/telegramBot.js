const { Bot } = require('grammy');

class TelegramBot extends Bot {
  constructor(TOKEN) {
    if (TelegramBot.instance) return TelegramBot.instance;

    super(TOKEN);
    TelegramBot.instance = this;
  }
}

module.exports = { TelegramBot };
