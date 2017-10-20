const Discord = require("discord.js");

const TOKEN = "MzcwOTY0NTQxOTE3NDk1Mjk2.DMuyXg.4MQHLKf-avVwkBYtf2uHD8heevA";

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
                name: ">>Buy",
                value: "For buy vero (get info) "
              },
            ],

              fields: [{
                name: ">>Credits",
                value: "Get all Credits "
              },
           
            
             
            ],
            timestamp: new Date(),
            footer: {
              text: "©Vero Bot 2017"
            }
          }
        });
        

        break;
        case "Credits":
        message.channel.send({embed: {
            color: 3447003,
            title: "^Help 4 Vero",
            url: "",
            author: {
                name: "Vero Bot",
                icon_url: "https://cdn.discordapp.com/avatars/370964541917495296/3457e4030ed8da03fb959a825b8f6831.png?size=128"
              },
            description: "All credits",
            fields: [{
                name: "Credits",
                value: "Credits to [CODEUR-SQUAD]▲Aida▲#0838 & 🎃๖ۣۜLolilol🎃#7469 Coder , helper   "
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
