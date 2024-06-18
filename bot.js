require('dotenv').config();
const { GrammyError, HttpError } = require('grammy');
const { TelegramBot } = require('./src-bot/telegramBot.js');
const Data = require('./src-bot/utils/data.js');

const bot = new TelegramBot(process.env.TOKEN);
const botApp = 't.me/pityhon_combat_bot/webapp';

const data = new Data('user.json');

bot.api.setMyCommands([
  {
    command: 'start',
    description: 'Start',
  },
  {
    command: 'help',
    description: 'Help',
  },
]);

bot.command('start', async (ctx) => {
  console.log(ctx.from);

  const massage = `Hi, @${ctx.from.username}! It is Python Combat - new crypto-project!\u{1F31F} Revolutionary cryptocurrency - Python coin right in your phone.\u{1F4F1}  \n\nStart mining Python coin right now and become a crypto millionaire!\u{1F680} \n\nRemember: Python coin is it future!!!\u{1F331}`;
  const replyObj = {
    reply_markup: {
      inline_keyboard: [[{ text: 'Launch Python Combat', url: botApp }]],
    },
  };

  await data.setData(ctx.from);
  await ctx.reply(massage, replyObj);
});

bot.command('help', async (ctx) => {
  const massage = 'I can`t help with anything at the moment.\u{1F614}';

  await ctx.reply(massage);
});

bot.on('message', async (ctx) => {
  const massage =
    'Command not recognized!!!\u{1FAE4}\nThis bot has two command - /start and /help. Please Enter one of them!\u{1F9D0}';

  await ctx.reply(massage);
});

bot.catch((err) => {
  const ctx = err.ctx;
  const error = err.error;

  console.error(`Error while handling update ${ctx.update.update_id}`);

  if (error instanceof GrammyError) {
    console.error(`Error in request: ${error.description}`);
  } else if (error instanceof HttpError) {
    console.error(`Cloud not contact  Telegram: ${error}`);
  } else {
    console.error(`Unknown error: ${error}`);
  }
});

bot.start();
