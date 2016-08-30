// We import the package that we installed earlier
const SlackBot = require('slackbots');

// We create a new Slack bot using the Token and name from before
const bot = new SlackBot({
  // Replace <SLACK_TOKEN> with the token from step E
  token: 'xoxb-74489912548-HLQ3mnlIkH2HlFEoLvZGExP7',
  // Replace <BOT_NAME> with the name from step E
  name: '@raul'
});
// This will be invoked when our bot has connected to Slack
bot.on('start', () => {
  // Define channel, where bot exist.
  // You can adjust it there https://my.slack.com/services
  bot.postMessageToChannel(
    // We select a channel that our bot should write to
    'general',
    // The message that the bot should post to the channel
    'Hello!'
  );
});
