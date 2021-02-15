
// 20 token dane   
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client(); 
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client(); 
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();
const client51 = new Discord.Client();
const client52 = new Discord.Client();
const client53 = new Discord.Client();
const client54 = new Discord.Client();
const client55 = new Discord.Client();
const client56 = new Discord.Client();
const client57 = new Discord.Client();
const client58 = new Discord.Client();
const client59 = new Discord.Client();
const client60 = new Discord.Client();
const client61 = new Discord.Client();
const client62 = new Discord.Client();
const client63 = new Discord.Client();
const client64 = new Discord.Client();
const client65 = new Discord.Client();
const client66 = new Discord.Client();
const client67 = new Discord.Client();
const client68 = new Discord.Client();
const client69 = new Discord.Client();
const client70 = new Discord.Client();
const client71 = new Discord.Client();
const client72 = new Discord.Client();
const client73 = new Discord.Client();
const client74 = new Discord.Client();
const client75 = new Discord.Client();
const client76 = new Discord.Client();
const client77 = new Discord.Client();
const client78 = new Discord.Client();
const client79 = new Discord.Client();
const client80 = new Discord.Client();
const client81 = new Discord.Client();
const client82 = new Discord.Client();
const client83 = new Discord.Client();
const client84 = new Discord.Client();
const client85 = new Discord.Client();
const client86 = new Discord.Client();
const client87 = new Discord.Client();
const client88 = new Discord.Client();
const client89 = new Discord.Client();
const client90 = new Discord.Client();
const client91 = new Discord.Client();
const client92 = new Discord.Client();
const client93 = new Discord.Client();
const client94 = new Discord.Client();
const client95 = new Discord.Client();
const client96 = new Discord.Client();
const client97 = new Discord.Client();
const client98 = new Discord.Client();
const client99 = new Discord.Client();
const client100 = new Discord.Client();

const help = `**
كۆمانده‌كان:

بۆ زیاد كردنی ڕیاكشن
!react <Channel ID> <Message ID> <Emoji>

بۆ هێنانه‌ ڤۆیسی هه‌موو بۆته‌كان
**`;

client6.on("message", message => {
if (message.author.bot) return;

 let prefix = "!"
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

// +say
if (command === "say") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە ADMINISTRATOR");
message.delete();
message.channel.sendMessage(args.join(" "));
} 

if (command == "embed") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە MANAGE_MESSAGES");
let say = new Discord.RichEmbed()
.setDescription(args.join(" "))
.setColor(0x23b2d6);
message.channel.sendEmbed(say);
message.delete();
}
});





const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\` Role.Kahrbaa \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
client.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
    
      owner: config.kahrbaaid,
      serverid: "NONE",
      channelid: "NONE", 
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    if (msg.channel.type == "dm")
      
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

client.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE"; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});

// ======= [ settings JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Reload JSON   ] ======== //
client.on("message", async message => {
  if (message.author.id !== dinfo.owner) return;
  if (message.content === config.prefix + "reload") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
// ======= [ Reload JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Console LOG    ] ======== //
client.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client2.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client3.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 4 يعمل`);
  console.log(`Hi ${client4.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 5 يعمل`);
  console.log(`Hi ${client5.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 6 يعمل`);
  console.log(`Hi ${client6.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 7 يعمل`);
  console.log(`Hi ${client7.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 8 يعمل`);
  console.log(`Hi ${client8.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 9 يعمل`);
  console.log(`Hi ${client9.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 10 يعمل`);
  console.log(`Hi ${client10.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});
client11.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 11 يعمل`);
  console.log(`Hi ${client11.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client11.guilds.size} " ]`);
});
client12.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 12 يعمل`);
  console.log(`Hi ${client12.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client12.guilds.size} " ]`);
});
client13.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 13 يعمل`);
  console.log(`Hi ${client13.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client13.guilds.size} " ]`);
});
client14.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 14 يعمل`);
  console.log(`Hi ${client14.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client14.guilds.size} " ]`);
});
client15.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 15 يعمل`);
  console.log(`Hi ${client15.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client15.guilds.size} " ]`);
});
client16.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 16 يعمل`);
  console.log(`Hi ${client16.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client16.guilds.size} " ]`);
});
client17.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 17 يعمل`);
  console.log(`Hi ${client17.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client17.guilds.size} " ]`);
});
client18.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 18 يعمل`);
  console.log(`Hi ${client18.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client18.guilds.size} " ]`);
});
client19.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 19 يعمل`);
  console.log(`Hi ${client19.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client19.guilds.size} " ]`);
});
client20.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 20 يعمل`);
  console.log(`Hi ${client20.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client20.guilds.size} " ]`);
});
// ==== [مهم جدااا ] ==== //
const KahDEV = require("request");
const invitecode = config.invite;
client.on("ready", () => {
  console.log(`[BOT] ${client.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

client2.on("ready", () => {
  console.log(`[BOT] ${client2.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

client3.on("ready", () => {
  console.log(`[BOT] ${client3.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

client4.on("ready", () => {
  console.log(`[BOT] ${client4.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

client5.on("ready", () => {
  console.log(`[BOT] ${client5.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

client6.on("ready", () => {
  console.log(`[BOT] ${client6.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

client7.on("ready", () => {
  console.log(`[BOT] ${client7.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

client8.on("ready", () => {
  console.log(`[BOT] ${client8.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

client9.on("ready", () => {
  console.log(`[BOT] ${client9.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

client10.on("ready", () => {
  console.log(`[BOT] ${client10.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

client11.on("ready", () => {
  console.log(`[BOT] ${client11.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

client12.on("ready", () => {
  console.log(`[BOT] ${client12.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

client13.on("ready", () => {
  console.log(`[BOT] ${client13.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

client14.on("ready", () => {
  console.log(`[BOT] ${client14.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

client15.on("ready", () => {
  console.log(`[BOT] ${client15.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

client16.on("ready", () => {
  console.log(`[BOT] ${client16.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

client17.on("ready", () => {
  console.log(`[BOT] ${client17.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

client18.on("ready", () => {
  console.log(`[BOT] ${client18.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

client19.on("ready", () => {
  console.log(`[BOT] ${client19.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

client20.on("ready", () => {
  console.log(`[BOT] ${client20.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});
// DONE //
// ======= [ Console LOG - END   ] ======== //

client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.toLowerCase() === config.prefix + "help") {
    message.delete(5000);
    if (!message.channel.guild) return;
    message.channel.send(help);
  }
});




// ======= [ MODE - React MSG  ] ======== //
client.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send("")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
      } catch (e) {
        return;
      }
    }
  }
});
client2.on("message", async message => {
  if (message.content.startsWith(prefix + "j")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client2.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        // كههربا (حسن ياسر)
        return;
      } // كههربا (حسن ياسر)
    } else {
      try {
        await msg.react(args[2]);
      
      } catch (e) {
        return;
      } // كههربا (حسن ياسر)
    }
  } // كههربا (حسن ياسر)
}); // كههربا (حسن ياسر)
client3.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client3.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client4.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client4.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client5.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client5.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client6.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client6.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client7.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        await msg.react(
          client7.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      }
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        return;
      }
    }
  }
});
client8.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client8.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
      
      } catch (e) {
        return;
      }
    }
  }
});
client9.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client9.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client10.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client10.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client11.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client11.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client12.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client12.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client13.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client13.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client14.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client14.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client15.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client15.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client16.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client16.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client17.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client17.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client18.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client18.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client19.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client19.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client20.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client20.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client21.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client21.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client22.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client22.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client23.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client23.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client24.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client24.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client25.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client25.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client26.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client26.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client27.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client27.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client28.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client29.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client30.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client30.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client31.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client31.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client32.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client32.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client33.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client33.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client34.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client34.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client35.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client35.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client36.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client36.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client37.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client37.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client38.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client38.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client39.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client38.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client39.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client39.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client40.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client40.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client41.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client41.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client42.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client42.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client43.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client43.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client44.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client44.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client45.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client45.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client46.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client46.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client47.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client47.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client48.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client47.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client48.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client48.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client49.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client49.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client50.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client50.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});

// ======= [ MODE - React MSG END  ] ======== //


// ======= [ StayVoice - MODE  ] ======== //
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {

    }
  }
});
client4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      }
  }
});
client6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
    }
  }
});
client10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      
    }
  }
});
client11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join() // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      message.reply("");
    }
  } // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
         
        })
        .catch(console.log);
    } else {
      
    }
  }
});


client21.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client22.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client23.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client24.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client25.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client26.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client27.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client28.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client29.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client30.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client31.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client32.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {
}
}
});
client33.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client34.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client35.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client36.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client37.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client38.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client39.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client40.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client41.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client42.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client43.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client44.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client45.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client46.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client47.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client48.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client49.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client50.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client51.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client52.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client53.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client54.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client55.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client56.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client57.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client58.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client59.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client60.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client61.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client62.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client63.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client64.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client65.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client66.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client67.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client68.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client69.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client70.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client71.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client72.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client73.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client74.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client75.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client76.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client77.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client78.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client79.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client80.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client81.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client82.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client83.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client84.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client85.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client86.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client87.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client88.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client89.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client90.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client91.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client92.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client93.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client94.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client95.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client96.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client97.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client98.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client99.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client100.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});

    





//تۆكینه‌كان لێره‌ جا بنێ

client.login("NzYyNzY4MTI5Mjk4MDA2MDU2.YChkNA.gwcRYYNOMJJOMjMOhW4T_5mRDgs");
client2.login("ODA4MTM3NDk5MDk5OTIyNDQz.YCLc1Q.Vsi6sZKVCapQ3aaOJd4BfPfN79M");
client3.login("NzYyNzY4NTA4OTQ5NjI2ODgw.YChmHw.kA60IxO65NpeL0ngJmb5rn2GJLk");
client4.login("NzYyNzcwNzI3MTA3MTY2MjA5.YChmTw.F1nYAja1Zorq8x8VpL4eIL5o0Co");
client5.login("NzYyNzcxNjM2NDY5NDk3OTA4.YChmhw.1b42u5Dzp31bbFvSzuHG9v2PQDI");
client6.login("NzYyNzcyNDExMzg4Nzg4Nzg2.YChmuQ.7ypI9-_o8bCExkpRbLJS1j1oTuY");
client7.login("NzYyNzcyODA4NjcyNjA4Mjg2.YChm7g.umsdmQf3D5XyxxvLWWMbnoc5oNc");
client8.login("NzYyNzczMzIzODg0MDAzNDEy.YChnJg.MSYRM9w81Nunss53IHiEiqj5yAs");
client9.login("NzYyNzczOTI3NTk5ODAwMzcx.YChnVA.i8ZJphXoYYLRWJYHkPTTPHj5Kq0");
client10.login("NzYyNzc0NTYxODU4NjUwMTgz.YChnmw.FL39XknAgpJFXCNwSLHbOnju0Co");
client11.login("NzYyNzkyNTUwMzA1MjM0OTg1.YChnwg.klSj0kFWaanMzNIZLDNuterVU1U");
client12.login("NzYyNzkyOTU4MTUxMjI5NDUw.YChoBQ.4dHFQ7xbJ9_8ImCDow6z5KQ97ak");
client13.login("NzYyNzkzNjY0NDY4MzUzMDY2.YChoVw.RFR54kHV39E-K3n8uOgrwuprdO0");
client14.login("NzYyNzk0MDE2MDk3OTU5OTY4.YChorw.xCCcxHzb8z2dMfG5hbZcFlB4QpE");
client15.login("NzYyNzk1MjU3MTIwMjkyODk3.YCho_A.VKYB9ezMC91-v3Yz53Zikpug1NQ");
client16.login("NzYyNzk1Nzc0ODE5MTcyNDA0.YChpNg.EzMYxewdCSwu4Ctk1ieRe-DkoMw");
client17.login("NzYyNzk2MTczNzc3Njk4ODg2.YChpcw.kIMKzGIeWlUmgdqhFVEiwEcFnLs");
client18.login("NzYyNzk2Njg0MzI0NTAzNTgz.YChptw.dmrhLY77O4Yq3uUc2gbnxUj21dA");
client19.login("NzYyNzk3NDM2OTU1MjYzMDE3.YChp9Q.ZEOsywnjO9RoEbhUJWL0tfzpiBQ");
client20.login("NzYyNzk3ODMxNzQ0MjU4MDk4.YChqMg.xXcifzGXv4IXhvyWv0PK8z4m0Q8");
client21.login("NzYyNzk4MzM3ODQ5Njg4MDY1.YChqdQ.3vfTesUj1NnnNGliZOiC778ddw8");
client22.login("NzYyNzk4ODgwNTcyMDQ3Mzgx.YChqtg.yAnXEOEw8oQgK0LB4b9oGcZhsTA");
client23.login("NzYyODE3NzE2OTk4MzczMzc3.YChrDQ.83t5fMtJa59k7Up0aiiDCRKZeOw");
client24.login("NzYyODE4MzU2NTQ0OTI5ODMy.YChrUA.zbpUaekskMHcl-HqadyfNxc9jXQ");
client25.login("NzYyODE5NjE0MDgxMjg2MTg2.YChrww.7I6FzhE76DyePSpl1bFAIi6L1IQ");
client26.login("NzYyODIwOTI5MDkyMzIxMjgw.YChrig.T-SeZEixTSPVOaLjAme6Y90rZUQ");
client27.login("NzYyODIwMzIwNzI1Njk2NTEy.YChsJQ.wSjaJVL51VQxoysy8fD8LJFqUss");
client28.login("NzYyODIyMTEwOTM4MDA1NTE1.YChsbQ.HnXNCGsE-KN2hYJZC89HobusuvE");
client29.login("NzYyODIyNTg1OTE4MDI5ODI0.YChsqw.Mp5NEuy3nEH54JcgudLKbsrbw_U");
client30.login("NzYyODIzMTI0NjAwNzUwMDky.YChs8w.o6XSGR2lx874ZSEoPt3bxCXqnDQ");
client31.login("NzYyODIzNTkyMTE5MjM4Njg3.YChtLA.66DEx6W7vHjrZpVxQtqzuTIM3jo");
client32.login("NzYzMTY0Nzc5NTY0MzY3ODcy.YChtdQ.PYpkDh-0Jz8-saV1c-1G7-YWGDo");
client33.login("NzYzMTY4Mjg2MDkwMTk5MDcx.YChtrQ.PGHp1Q3prhy2MQETNSXP1UzJEg4");
client34.login("NzYzMTY4NzMxNzc3MjA0MjU0.YCht6w.tXR3_Lx2UtcZR22rk1DrW5iaDzI");
client35.login("NzYzMTY5MzU3Nzc3ODYyNjg2.YChuIg.H9OCC9hdtcpyinO29ybHQHBmANc");
client36.login("NzYzMTY5ODM3MzAzNTk1MDIw.YChuVw.fBuNpx0UwfTGR13dV9YdWHGcJik");
client37.login("NzYzMTcwNjk3MDk3NzczMTA2.YChulg.4ptnSCD01mV8Dc_CpR1FA_WFCQs");
client38.login("NzYzMTcxMDc0NTQzODQ1NDA2.YChu0w.NNx1AOSOoOFOkYcEefKxxm2QPqM");
client39.login("NzYzMTcwNTM0MzU5MTcxMTE3.YChvCA.fXEib-j0I9qxQAxPUjnZ3Fr0reU");
client40.login("NzYzMTcyMjE4MTAzNzkxNjc4.YChvTQ.MV3XX0cUVjP41AJD9raMmj83Js4");
client41.login("NzYzMTcyNjgxMzA2NDcyNDU4.YChvhQ.u4CFkOgIUVbZyYVKJFmNAUllgMg");
client42.login("NzY0ODA5NjAzNjUzMzA0MzQx.YChwHw.ymvhcJpmcqnwxSs-lZbdDbJ77lM");
client43.login("NzY0ODEyODg4MTY1ODQyOTQ0.YChwdA.kbqL7D49dRNaDdByN-m9hSs0k_I");
client44.login("NzY0ODEzNjg0NjkzNDAxNjAw.YChw5Q.xpxGcXXT1n5TWrvMr9mI9lO38Cg");
client45.login("NzY0ODEzNDU1MDAwNjAwNTk2.YChwsg.al8S8n5z9snL9mO4KWD-WZjoNlg");
client46.login("NzY0ODE1MjAxMDU2MzI1NjQy.YChxGg.CnTDos86hxHkP7L_xvxhqlgJEFE");
client47.login("NzY0ODE1NjI0MTQ4NjE1MjE4.YChxXg.IHJEzUttxpqcsq24m0mPG9r2mLI");
client48.login("NzY0ODE2MTg4MjUzMjc0MTIy.YChxkg.LdTb9ag3F4JVUkoCIuaWARw-eJ0");
client49.login("NzY0ODE2NjczODY1NTk2OTU5.YChxxQ.70ptOlAepqe0GJiw5N2Cu2HJNh");
client50.login("ODA1NzMzOTE4ODQxMjQxNjIw.YBfNng.FlwnQ7_ZD-JTV_zmdUNdJWKx_oY");
client51.login("ODA1NzM1MjI0NDk5NTAzMTM0.YBfOxw.PLioxnmQi7ZaHqvmMqsHyISspYg");
client52.login("ODA1NzM2NjI1NTM0NjY0NzA3.YBfPQA.VFfPQL8eeNfaI_9qQ0apXeFZrfo");
client53.login("ODA1NzM3MzM2OTAxOTkyNDc5.YBfQEg.k6OmLHT96w7o9A9e9bx5szp_MFQ");
client54.login("ODA1NzM4MjA3ODYxNjY5OTA5.YBfQzg.o-n4ABVwD4jpeKaWte1n0nlRPMc");
client55.login("ODA1NzM5MjE0NDQ4NDkyNTY1.YBfRqQ.v56WIQ3fob9-eqn2Lr7g40XtF_4");
client56.login("ODA1NzM5Njg2MTI2ODEzMTg0.YBfSiA.4L2RuIxoa6h4RqtqApyBc630VWI");
client57.login("ODA1NzQwNzg5MzI5MDM1MzA1.YBfTNg.27Gmo-Vy_OcA92XD-ERctfd1Ry0");
client58.login("ODA1NzQxNjE2MDkzNzI0Njc0.YBfWaA.vcqqfKTON9_jT7vdg6jbpR7t4GA");
client59.login("ODA1NzQ0OTY1ODc4ODA4NTg3.YBfW_g.MB3dlgh0fOHvtUDTlQtbZDSOpCM");
client60.login("ODA1NzQ1NTY1MTAzMDMwMzAy.YBfXeA.dsi3YqvZgD9zPWOOYNuCoFXUDvs");
client61.login("ODA1NzQ2MDg2NjkzNjk5NjA0.YBfX6g.gL98tUObcOg5MUKw9KpJl2Sa3MA");
client62.login("ODA1NzQ2Njg2MDE3MTQyODA1.YBfYiA.BK5RD51ez5cqoM9_al73UUtBiAU");
client63.login("ODA1NzQ3MjI1NzQ0NTA2ODkx.YBfZEg.otgtEDODdiL_ZcWsBvHqqA-53KM");
client64.login("ODEwNDY1NzA4NzczMzQzMzAz.YCkS2w.IV2tgjdT-EOOT8dU1w692j83NTI");
client65.login("ODEwNDgzNDk0NDAwMTYzODQ1.YCkT6Q.ziz8T-XNiol884cCp9wJYzW-zH4");
client66.login("ODEwNDg0MjA4ODY2Mjk1ODIx.YCkUcA.geDSPzWry-yBuILVjxrgg5HxSIo");
client67.login("ODEwNDg0NjAxOTg1MzAyNTk4.YCkU1Q.AU5do-qbiHd7yOVF_8F3MdLPLFo");
client68.login("ODEwNDg1MDE2Njk3MjQxNjMx.YCkVVQ.b09aKMTfFNW7dKP3aXMqYPFPHPI");
client69.login("ODEwNDg1NTI5NDQ3NDk3NzU4.YCkVyg.dzGsWao5ZBU6-NLIyOA7kLbVsI4");
client70.login("ODEwNDg2NDI4NzA5OTQ1MzU0.YCkWzA.WfpKyXseLbdmNC1lFEXdth_tjwg");
client71.login("ODEwNDg3MjM3NTYwNzYyNDA4.YCkXXg.tp6stNwALqT-DKinjT9mbC4jBDs");
client72.login("ODEwNTIyODY4ODI3NDIyNzMx.YCk4gg.Eb-0dZOBNspkKJHJcuni77y1VQo");
client73.login("ODEwNTIzMzQ1NDkyNjM5Nzk1.YCk48A.x2L17jXAWtCVpLUEvBYsRxB_Guk");
client74.login("ODEwNTIzODE4MTkxNjE4MTA4.YCk5Yw.bmaaZvr1bXtWxDgwzyzKsiDZQjQ");
client75.login("ODEwNTI0MjY0MzM1NjcxMzI2.YCk53g.kKOFYR-fMy-bUerkqIzjmxAt_Lw");
client76.login("ODEwNTI0NzQ3NjUyOTIzMzkz.YCk6Vg.BaXixG5TM9tbIP9jQgVWZVBfOHg");
client77.login("ODEwNTI1NjI4MTY3NjE4NTgw.YCk7VQ.dIoCJOy_kLzz1ctGWZCwI2aV7KU");
client78.login("ODEwNTI2MzEzNTg0NTI1MzU0.YCk7yQ.lvxv7SQkeaFyujMTgL9H0YhjVXE");
client79.login("ODEwNTI2OTEzMTMwMzk3NzE2.YCk-Dw.1EbFowDlM9dLR2UZ6rsXUjzKtRg");
client80.login("ODEwNTMwMzY0NDk2OTM3MDAx.YCk_eg.ghtYyY5jSIDJ-6w7d3dhAP9qDk0");
client81.login("ODEwNTQzMTQ2MDM4NTkxNDg4.YClLZg.dPPfdRfxVmtx33frpUjo0LIWrwo");
client82.login("ODEwNTQzNjA3NDUzOTc0NTY5.YClL2Q.MC37uDwdFX3p_zH1U_v5Km-ufxk");
client83.login("ODEwNTQ0NTE5MDY5NTY0OTk5.YClMuw.Zi7imlJm3PF1A6lYvI_JC26S3kM");
client84.login("ODEwNTQ2NDExNjYxNjg4ODYy.YClOVQ.rjNwvub4DO7S9sOVuc4kPWhyV90");
client85.login("ODEwNTQ2NzEyNDgwOTcyODAx.YClO0A.OQH4KFzhSlNIdTaoXM4wnrGirhs");
client86.login("ODEwNTQ3MjMyNzQyOTY1Mjg4.YClPWA.0c6fZfqadPSjVpCMp3r0Vf-L4pw");
client87.login("ODEwNTQ3ODQwMDk5MTU1OTg5.YClP6g.9SXCcD-KqaOU28XLvfdsQo3SEG8");
client88.login("ODEwNjA5NzY2MTM2MTUyMTA0.YCmJbg.bRYe0pF3Q9f_gzU3jx_qYkoMSdk");
client89.login("ODEwNjEwMTk1NTI0NzQ3MjY1.YCmJ5A.Ix2A6eM9DDR7zMWa-A_m96x0IDI");
client90.login("ODEwNjEwNjY1MzcwODEyNDQ2.YCmKaw.fhB3vOrNdaIoEHqH8q4oQF9_uR4");
client91.login("ODEwNjExMjQ4Mzc4NTQ0MTI4.YCmK4g.V8ym5KGB0e7D9nO9FeMi6cH0w7g");
client92.login("ODEwNjExNzkzMTM4ODEwOTIx.YCmLZQ.8lsGPpBDP6hPGdkxzA2PNGzMmXE");
client93.login("ODEwNjEyMjg4NjMzNDM4MjM4.YCmL4w.e38g3NxzL5OVr_v-rNt8MdmY7ic");
client94.login("ODEwNjEyODIzMTg0MjQ0NzQ2.YCmMZg.PpXcHjox7hMqRMFJky8VB4Ev3cc");
client95.login("ODEwNjEzNzU4NjAyMTE3MTgw.YCmM_w.Vjw8478hiS75SmtiIjF_LQ2tUtk");
client96.login("ODEwNjE0MDAzOTI3NDgyMzcx.YCmNgA.yK60fW2bJL9p7abObwTT5lGbqos");
client97.login("ODEwNjE0MDAzOTI3NDgyMzcx.YCmNgA.yK60fW2bJL9p7abObwTT5lGbqos");
client98.login("ODEwNjE1MzkyNzI4OTA3Nzc2.YCmOyA.nu7BUJ_SctA7kf_CRF2gS3fnHkA");
client99.login("ODEwNjE1MzkyNzI4OTA3Nzc2.YCmOyA.nu7BUJ_SctA7kf_CRF2gS3fnHkA");
client100.login("ODEwNjE3MzIwMDk1MzUwODM0.YCmQlA.pgpy3dhKD52WC6dz3LcBYQ-tXvU");
