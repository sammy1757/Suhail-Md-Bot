const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347081712868";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_47_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDkxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM5LFxuICAgICAgICA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWW5YeGlvQzRKMkprUmIyRkl1RGdzWXBEckxZSmtUaTdRbEVONDdyVTdwMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUVppeEYwdFNRRzJVdkVzVWFOXzkzd1wiLFxuICBcInBob25lSWRcIjogXCJhNjlmYWFhZi1iMmIyLTQ2NmQtOWQwNi1lNGM0OWNjZjUyYTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAxNDQsXG4gICAgICA4MixcbiAgICAgIDEyLFxuICAgICAgNjksXG4gICAgICAyNixcbiAgICAgIDEyLFxuICAgICAgMTA0LFxuICAgICAgMTgwLFxuICAgICAgNjgsXG4gICAgICA3NyxcbiAgICAgIDEwNCxcbiAgICAgIDE1OSxcbiAgICAgIDYyLFxuICAgICAgNjksXG4gICAgICAxNDgsXG4gICAgICAxNzgsXG4gICAgICAxMjAsXG4gICAgICA4OCxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDEwMCxcbiAgICAgIDQyLFxuICAgICAgMjIzLFxuICAgICAgMTcyLFxuICAgICAgMTIsXG4gICAgICAxMDAsXG4gICAgICA1NCxcbiAgICAgIDQzLFxuICAgICAgMjcsXG4gICAgICAxMjQsXG4gICAgICAyMyxcbiAgICAgIDEyLFxuICAgICAgMTQzLFxuICAgICAgMTc3LFxuICAgICAgMjM1LFxuICAgICAgOTYsXG4gICAgICAyMzgsXG4gICAgICAyMTIsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEo0UlhaM1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODE3MTI4Njg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNhbW15IEJlblwiLFxuICAgIFwibGlkXCI6IFwiMTAyOTU0ODYyNDExOTI3OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdJb0xzRUVNL1IwTGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwUTJ0TnZXczFJdE1BSTE4Vm9SWEVDcDE2VG5qR0xCUFRWU0R4N2krN2p3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImw3TnlDTklZeXRKdkRPL05sck0zN3hqNS9rcHNReEhUbHJManBPTzhqeTJ1RDVVQVEzOG1QL2s1WjFyclIvYWVhZ1JnUklFRWtHUFJDUTdRcWFtM0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZwai9XRURoMmwyeExoRFB4UVcyU0hYKzBibjlSdTRPNmM2RVRUditac2dBdkhnYXdOaWNHTTkrVUd2QlNWRUNLT0VaQXM5am1HbGY5NE1BY2E4QkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODE3MTI4Njg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTM3NDQxOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
