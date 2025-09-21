const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BmcTBTTkUwVGp5N1ZrUjdFbnl4MTc4WURlSythZmlkZGFqZS80NHBFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2JrYTY0YjY5UEp5c3FxTm02VjV3dGdXVEJLRXQ1Q1FLY1llNy9GL2JEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTXRzbjJnSjd5RkhXUmV2QjJNeU1ydU52WW1UOWRNZ1hkRGc5a2FxTFVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdXJ1YzZKeU50N1ZvbnhZamdkTUsyeVlocFQ5SGV0Z1lJWG1GS2RjUVI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9Ja1ZLaVlySkJobFEwbDY5RmpNRUVscHUrQlNRaVgvVXNjdFBIc21mbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlQWVpkS0xkb3NzSmZaWC91R1RoM0NMSjR0QXhGcFUvSGU0WC9xSldWeDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5XTHJWdlhOZGdEd3Y3UzhyWHVkV0xnMkc4N0k2WHlRSkJlRTRidmRuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFVNMHdpaFMrRG9naDY5UXArV3BzZzFYL21kRjZKUU0xWUxoaEZsZm1DQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRrbEl0aXBzeWcwbEYveWhDOGRBa1dJZnA1bUNaTkRzSjlPbSt2MEpLUktTK3ZjcEEyTkV3ZjhGYkg0NUZaUGY1eGh3ZHZZRzRxNEVHMFdmTW1HWUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6ImdxQjRoZ1J5U3AzaE4wUVdkblBRVWNoVE16Z1ZGZlpRNTZ4Vkg5amxIZW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE2MjkwNjQwNzYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RkIyQTZFOUZDM0IwREM0MzQzOTkzNkY5REREMkYxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTg0Nzk1NDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNjI5MDY0MDc2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNThEQTgxRTUzRERBQ0IwRjYzODQyRjM5QkNFREY2QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NDc5NTQ2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJUQU1HMzRYSiIsIm1lIjp7ImlkIjoiOTE2MjkwNjQwNzYwOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi5LqXxoEg4bSAIMqZIOG0gCDJquS6lyIsImxpZCI6IjcwNDI5NDYwOTU5NDQ0OjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLSzVnRXNRc29uQnhnWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTOVEyMEpSamVuM2dxR0tkdHVtUXNvYnNJSGVLWU5Db1JjbGxRVktzZEJVPSIsImFjY291bnRTaWduYXR1cmUiOiJzV0lTOWo0SnFEMHRDL0hCZzF2YS9HRjNBR1BCQTI4WHI1RGlnaHhaRVBjWnh2b2pUVEpGQVdLcndUQ0dlVm8rOUFJd3o0aUp5UkpyaFNzTndnOExCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidzdQUGNSUkpaczF4S0RPNVh4Tnc0VzV2cWV6dWhEckllUkJKWFZPR0RVbFVUSEVzZUcvTkpZZTF0aHFWd0I3VDhodlBTd3R5UzMraXB4R0VIVlI2Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTYyOTA2NDA3NjA6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVdlVOdENVWTNwOTRLaGluYmJwa0xLRzdDQjNpbURRcUVYSlpVRlNySFFWIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg0Nzk1NDIsImxhc3RQcm9wSGFzaCI6IjRaUlA2UyIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGFNIn0=",
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
