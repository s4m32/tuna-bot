//༼༺⋋[© 2022 Zim Bot Inc.]⋌༻༽\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//+212655892921 
//֎֎֎֎֎֎֎֎֎֎֎.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['212655892921'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['212655892921'] //another owner number
global.premium = ['212655892921'] //premium number
global.pengguna = 'sam' //username
global.botnma = 'REI BOT INC' //bot name
global.ownernma = 'sam' //owner name
global.packname = 'sam' //sticker package name
global.author = 'By Sam' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '🔵' //design
global.mess = {
    success: 'Takaenda Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'rei bot must be admin neh!',
    owner: 'This cmd is for rei bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'wait rei bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.thumb = fs.readFileSync('./Zimbot/drips.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
