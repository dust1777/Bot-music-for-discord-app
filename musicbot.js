const Discord = require('discord.js');
const bot = new Discord.Client ();
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 1};

const token = 'token do bot';
bot.login(token);

bot.on('ready', () => {
console.log('use the bot in discord');    
});

bot.on('message', msg => {
    if (msg.author.bot) {
        return;
    }
    if(msg.content.toLowerCase().startsWith("d!")) {
        let VoiceChannel = msg.guild.channels.find( chanel => channel.id === '876393555139100743');

        if (VoiceChannel == null) {
            console.log('Canal não foi encontrado!');
     
        }

        if (VoiceChannel !== null) {
            console.log('o canal foi encontrado');

            VoiceChannel.join()
            .then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=cDDLhAuZjxo', {filter:'audioonly'}); 

                const DJ = connection.playStream(stream, streamOptions);
                DJ.on('end', end => {
                 VoiceChannel.leave();
                });
            })   
            .catch(consoLe.error);
        }
    }
})