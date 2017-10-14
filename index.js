const Discord = require("discord.js");

const TOKEN = "MzY4NjY4MTg2ODM4Njk1OTM3.DMNUiA.baB8gXXdmE8tCRQwWIOtmS4THX4";

var bot = new Discord.Client();
const PREFIX = ">>";




bot.on("message",function(message){
    
    
    
    
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0].toLowerCase()){
    
        case "credits":
        message.channel.sendMessage("``` OWNER: [EC] [ED] [YT] Stynax🎃#2721    +  ๖ۣۜFireModz#7133   ``` ");
        message.channel.sendMessage("``` Bot Dev : Lolilol#7469 ``` ");
        break;
        case"help":
        message.channel.sendMessage(" :white_check_mark:, **Help sent**");
        message.author.sendMessage("commands prefix '>>' Commands list :")
        message.author.sendMessage(">>credits - get all credits")
        message.author.sendMessage(">>purchase - get all infos for buy the script hub.")
        break;
        case "purchase":
        message.author.send({embed: {
          color: 3447003,
    
         
          description: "10$ PayPal for get your whitelist code (off sale) ", 
        }});
        message.channel.send({embed: {
            color: 3447003,
      
           
            description: "10$ PayPal for get your whitelist code (off sale) ", 
          }});
    
      
    
      break;
    
    
    
        
    
    
        default:
        message.channel.sendMessage("ERROR COMMAND!");
    
    }
    
    });
    
    bot.login(TOKEN);
