const Discord = require("discord.js");

const TOKEN = "MzY4NjY4MTg2ODM4Njk1OTM3.DMNUiA.baB8gXXdmE8tCRQwWIOtmS4THX4";

var bot = new Discord.Client();
const PREFIX = ">>";




bot.on("message",function(message){
    
    
    
    
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0].toLowerCase()){
    
      
        case "buy":

    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Buy Vero",
  
       
    description: "You can buy Vero with",
    fields: [{
        name: "Gift Card ",
        value: "Roblox Card , Psn card , Steam card , or Robux (260) dm the owner for buy it! || NO PAYPAL||"
      },
     
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "©VeroEx"
    }
  }
});
      
    
      break;
    
    
    
        
    
    
        default:
        message.channel.sendMessage("ERROR COMMAND!");
    
    }
    
    });
    
    bot.login(process.env.BOT_TOKEN);
