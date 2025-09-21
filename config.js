const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09nMk9SMWdhR0xIVlVDRnM0Q0V4cnBSN25Pd1RBcFJab3NXUUcxOS9WQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXArUCtwUStCTGs1WkJqN0VTZFY1c0lSOHN1dVVoWHNUMFJleDlPRFEzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQSt2MkJGNFcwZ3JtcGJ5UzFOdEVIUCtsdEZRQnVxanJJNHJEY1l4WW40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwbkxEMUwvOGF6MzNmVWNuNk5TbmN1M2JtQVhBK1RQcEZZSlFYN3RsZ0dVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFRXRyK3RPSXArRlFzV2k5SHE4QnJSOUJhTnZIcFNBL1A3UWpxeU1SbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InExZUVwM21sUkc0Tmh4V1FKU2lxbWlObmlsZEluM3lWRHY3ZjNJUGZQUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9aVktpS1F0WndTcUtTbTJQMlY0WkVOTm1lalNMT25JU3RFWnVuWFVrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzV0elViYkRKVVdtYXdXUFhEVTJBb0VReU00QTl6ZGpGWStZVEVZbnlXQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill0YS84djJlb1pEUldzdzdHM29aRDYyMmliZmE5SUFkV0dJR0ZvK2ZjZmx5KzBMN21yR0N2akVSNDdJamdXTVcyYzBtUkdSVk5vVFQzMXIwN28ra2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUxLCJhZHZTZWNyZXRLZXkiOiJEZUxtcHVDNzk4Nit1WTlBVElRUVdkbzMzY0x6d29kTFpMK1FSNmdnaGZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNjI5MDY0MDc2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTgyN0M4N0Q4NURBQkZCMTYwNEFFOEJBQjc5RUFCQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NDgwMTA3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTYyOTA2NDA3NjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUxRUY2MzBDMUU2RkQxMzQ5MkNEMjJDRDdGODNBNjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODQ4MDEwN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSFhaWFFFRFciLCJtZSI6eyJpZCI6IjkxNjI5MDY0MDc2MDo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuS6l8aBIOG0gCDKmSDhtIAgyarkupciLCJsaWQiOiI3MDQyOTQ2MDk1OTQ0NDo5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0s1Z0VzUTRvM0J4Z1lZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUzlRMjBKUmplbjNncUdLZHR1bVFzb2JzSUhlS1lOQ29SY2xsUVZLc2RCVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZUpMNUpNeFpwcFdaRzBLMGpSK0hYWTM1RHY4VXRPQkxCV3VVN29FU3FpZlVRczJSUVhPTS9CTEVYMTB5QlpISFpJQml5M1l0NDNyL2c5WThoRU9wQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IktsRDZDR3JDUnhFT1padHVmb3g4TnZtTTZRWVBJRWY0SnhvbkIzaDFzYzNCaG9lSWFKdXIyMFFlRTIwWDZreDBIL3JlODhQbSs1c3A1RDFrK1RtNGdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MjkwNjQwNzYwOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXZVTnRDVVkzcDk0S2hpbmJicGtMS0c3Q0IzaW1EUXFFWEpaVUZTckhRViJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4NDgwMTAzLCJsYXN0UHJvcEhhc2giOiI0WlJQNlMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURhTSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-WAQAR-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yoie7u.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3-WAQAR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3-WAQAR-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-WAQAR-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-WAQAR-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yoie7u.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
