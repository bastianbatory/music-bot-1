module.exports = {
  Admins: ["UserID", "UserID"], //DEV'S
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || "!",
  Port: 80, //Which port website gonna be hosted
  SupportServer: "https://discord.io/sciencegear", // Support Server Link
  Token: process.env.Token || "MTE4NzgxMTMxMzgyOTgwNjE2MA.GO-ywg.9ctVby5Yne60j2YLqs4MUeE_-be4bLzF4WlsGo", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1187811313829806160", 
  ClientSecret: process.env.Discord_ClientSecret || "LUn8GzC0twxpVR1kU3OLvxn5HMm5iFYC", 
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true, 
  DefaultVolume: 100,
  CallbackURL: "/api/callback", 
  "24/7": true,
  CookieSecret: "Pikachu is cute",
  IconURL:
    "https://media.tenor.com/sce9SDRey4EAAAAi/disc.gif",
  EmbedColor: "RANDOM", 
  Permissions: 2205281600, 
  Website: process.env.Website || "http://127.0.0.1/",

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  Lavalink: {
    host : "n1.ll.darrennathanael.com",
    id: "Main",
    port: 2269, 
    pass: "glasshost1984", 
    secure: false, 
    retryAmount: 200, 
    retryDelay: 40, 
  },
  
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "7436ac02cb1448879acc03a15eeadb8a", 
    ClientSecret: process.env.Spotify_ClientSecret || "07c74a4b754245249a309d15aac6d4b6", 
  },


 

};
