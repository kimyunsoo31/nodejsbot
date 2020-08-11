const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '출근') {
    message.reply('*관리자 출근상태 입니다*');
}
});

client.on('message', (message) => {
    if(message.content === '퇴근') {
      message.reply('*관리자 퇴근상태 입니다*');
  }
  });

  client.on('message', (message) => {
    if(message.content === '선생님 출근') {
      message.reply('*선생님 출근상태 입니다*');
  }
  });

  client.on('message', (message) => {
    if(message.content === '선생님 퇴근') {
      message.reply('*선생님 퇴근상태 입니다*');
  }
  });

client.login(token);