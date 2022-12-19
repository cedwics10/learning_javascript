const xmasDay = 25;
const xmasMonth = 11;

console.log('starting timer...');



function computeXmas(currentDTime) {
    let christmasDay = new Date(currentDTime.getFullYear(), xmasDay, xmasMonth);
    if (currentDTime.getDay() > xmasDay && currentDTime.getMonth() == xmasMonth)
        christmasDay.setFullYear(christmasDay.getFullYear() + 1)

    let remainingSec = Math.floor((christmasDay.getTime() - currentDTime.getTime())/1000);
    console.log(remainingSec + " secondes avant Noël !");
}

setInterval(() => {
    console.clear();
    let currentDate = new Date();
    let currentDTime = computeXmas(currentDate);
    console.log('Nous sommes le ' + currentDate.toLocaleDateString() +
        ' et il est ' + currentDate.toLocaleTimeString());
}, 1000)