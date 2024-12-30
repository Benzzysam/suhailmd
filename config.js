const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348079730737";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_23_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYwLFxuICAgICAgICA4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVlWkNqdW9aTFpvRk5QSnVFdmMzN3ZUNS9ETmpqR0Z6R1JsZlVTakRrNFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3OTczMDczN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODU2MTE4MzU5RDBCQ0QyMEFCNzlENDgzNThDNzhBRDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NTkzNzk0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjAtb3NseGd4UVBhUWphTE1Md1drRGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGE3MTFkNjQtODNkNi00ZTJmLWI2NDEtNWUzOTIwNWM1OTQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDY0LFxuICAgICAgMjIwLFxuICAgICAgNzIsXG4gICAgICAxNjEsXG4gICAgICAyNDksXG4gICAgICA1NCxcbiAgICAgIDE3NCxcbiAgICAgIDE3MSxcbiAgICAgIDM3LFxuICAgICAgNTYsXG4gICAgICAxNDksXG4gICAgICAxNTAsXG4gICAgICAyNyxcbiAgICAgIDM4LFxuICAgICAgMTUsXG4gICAgICA5NyxcbiAgICAgIDIwOSxcbiAgICAgIDg4LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAxMjMsXG4gICAgICAyMjQsXG4gICAgICA0OCxcbiAgICAgIDcxLFxuICAgICAgNzIsXG4gICAgICAxNDEsXG4gICAgICAxMSxcbiAgICAgIDEwNSxcbiAgICAgIDEyNSxcbiAgICAgIDIyMixcbiAgICAgIDQsXG4gICAgICAyNDYsXG4gICAgICAyMzgsXG4gICAgICAxNzgsXG4gICAgICAyNDQsXG4gICAgICAyNDYsXG4gICAgICAxODEsXG4gICAgICAxOTcsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQU0ZTUEs4QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3OTczMDczNzoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRFIEhFQVZFTiBERUNPUiBHTE9CQUwgU0VSVklDRVMgTElNSVRFRFwiLFxuICAgIFwibGlkXCI6IFwiMjE1Nzg3OTQ4MjIwNjY0OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xVnpxY0RFTGllekxzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMGFsSkovc3laOW5jU25OQ2l4K3ZUd2VHRy85Nm9QSjB5RGxuWlhNWDlFRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBZjVpOENVc043dURhQk1tWndlS1JZN0RobjBtb3AyVU9vUXp3L2NDdzF1NGRlRllhaWJVMnJPN3UycVNpN29PVzFjSmR2OHNyQ0hlbU1vVU96clFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkOWZRUHJRUGljWUh1ejdXQUREaUszcWJIMVZ0b1VDMmdUdVMxcDBIWHZaNGVtdlNtY2VJbE9SNzQrNlI2WGVXRTBIUEx2cVAyTWJBZnFmcE1CbVlEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc5NzMwNzM3OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU1OTM3ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQVEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBURS5qc29uIjogIntcImtleURhdGFcIjpcImVpd3dRMjRWMW1jR016LzJUZGVFeE5mT285M2RlTTFRV1dVUGw4R2FaRVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODg4Mzc2MDA4LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDQsNV19LFwidGltZXN0YW1wXCI6XCIxNzMwMzM0MTYwMDY3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
