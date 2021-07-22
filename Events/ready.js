module.exports = bot => {
    console.log("\x1b[32m",`${bot.user.username} est en ligne !`);

    let statuses = [
        `AGARTHA SHIELD`,
        `By SinFR`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "STREAMING", url: 'https://www.twitch.tv/sinfr_'});
    }, 6000)
}