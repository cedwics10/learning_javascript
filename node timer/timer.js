console.log('starting timer...');

function computeXmas(currentDTime) {
    let christmasDay = new Date(currentDTime.getFullYear(), 11, 25);
    if (currentDTime.getDay() > 25 && currentDTime.getMonth() == 11)
        christmasDay.setFullYear(christmasDay.getFullYear() + 1)

    let remainingSec = Math.floor((christmasDay.getTime() - currentDTime.getTime())/1000);
    console.log(remainingSec + " secondes avant Noël !");
}

setInterval(() => {
    console.clear();
    let currentDate = new Date();
    let currentDTime = computeXmas(currentDate);
    console.log(currentDate.toLocaleDateString() +
        ' à ' + currentDate.toLocaleTimeString());
}, 1000)