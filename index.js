const Discord = require("discord.js");

const TOKEN = "MzcwOTY0NTQxOTE3NDk1Mjk2.DM9fDg.EWT_vIujfVbqbZPGBh7Y39lNo4E";

var bot = new Discord.Client();
const PREFIX = ">>";


bot.on("message",function(message){
    
     bot.User.setGame('sales on (dm  the owner or type ">>buy")');
    
    
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(" ");
    


    switch (args[0].toLowerCase()){
    
        case "buy":
        message.channel.send({embed: {
            color: 3447003,
            title: "Buy vero",
            url: "",
            author: {
                name: "Vero Bot",
                icon_url: "https://cdn.discordapp.com/avatars/370964541917495296/3457e4030ed8da03fb959a825b8f6831.png?size=128"
              },
            description: "For buy vero you need :",
            fields: [{
                name: "Gift Cards",
                value: "Minimum 5$ (PSN , XBOX , STEAM , ROBLOX , ROBUX (260 if you have a group for send robux) OR AMAZON."
              },
            
             
            ],
            timestamp: new Date(),
            footer: {
              text: "©Vero Bot 2017"
            }
          }
        });
        

        break;
            
            case "website":
        message.channel.send({embed: {
            color: 3447003,
            title: "Website of Vero",
            url: "",
            author: {
                name: "Vero Bot",
                icon_url: "https://cdn.discordapp.com/avatars/370964541917495296/3457e4030ed8da03fb959a825b8f6831.png?size=128"
              },
            description: "Vero Website",
            fields: [{
                name: "Link :",
                value: "http://veroscripthub.cf/"
              },
            
             
            ],
            timestamp: new Date(),
            footer: {
              text: "©Vero Bot 2017"
            }
          }
        });
        

        break;
    
        case "help":
        message.channel.send({embed: {
            color: 3447003,
            title: "Help 4 Vero",
            url: "",
            author: {
                name: "Vero Bot",
                icon_url: "https://cdn.discordapp.com/avatars/370964541917495296/3457e4030ed8da03fb959a825b8f6831.png?size=128"
              },
            description: "Commands :",
            

              fields: [{
                  name: ">>buy / >>website",
                  value: "Get infos for buy / get link of website"
              },
                    
            
           
            
             
            ],
            timestamp: new Date(),
            footer: {
              text: "©Vero Bot 2017"
            }
          }
        });
        

        break;
       

    
    
        
    
    
        default:
        message.channel.sendMessage("ERROR COMMAND!");
    
    }
    
    });
    
    

    
    bot.login(process.env.BOT_TOKEN);
