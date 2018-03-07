const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "!";

client.on('guildMemberAdd', member => {
               let role1 = member.guild.roles.find('name', 'Member');
               member.addRole(role1);
               
 });

client.on('message', msg => {
if(!msg.content.startsWith(prefix)) return;

let command = msg.content.split(" ")[0];
command = command.slice(prefix.length);

if (command === "osu") {
let role1 = member.guild.roles.find('name', 'Member');
msg.channel.send(role1 + ' Let's play some osu bois! ');
