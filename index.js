const fs = require('fs');
const ytdl = require('ytdl-core');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('url: ', url => {
    const search = require('youtube-search-lib')
    search({ 
        key: 'AIzaSyBpo03iwipSswHdvUIX4sj8w0gt8P6lnvg', 
        term: url, 
        maxResults: 2 
    })
    .then((videos) => {
    ytdl(url)
    .pipe(fs.createWriteStream(`./mp4/${videos[0].snippet.title}.mp4`))
    console.log(`============\ninformation:\n============\ntitle: ${videos[0].snippet.title}\nchannel: ${videos[0].snippet.channelTitle}\n\n${videos[0].snippet.title} has been downloaded! please check at mp4 folder!\n\ncopyright by Devin Adrian`)
    })
    readline.close()
})