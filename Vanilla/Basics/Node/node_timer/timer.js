const xmasDay = 25;
const xmasMonth = 11;
const EventDesc = 'NOËL';

console.log('starting timer...');

function computeXmas(currentDTime) {
    console.log('Nous sommes en année : '  + currentDTime.getFullYear());
    let christmasDay = new Date(currentDTime.getFullYear(), xmasMonth, xmasDay);
    if ((currentDTime.getDay() > xmasDay && currentDTime.getMonth() == xmasMonth) ||
	(currentDTime.getMonth() > xmasMonth)
	)
        christmasDay.setFullYear(christmasDay.getFullYear() + 1)


    // Find the distance between now and the count down date
    var distance = christmasDay.getTime() - currentDTime.getTime();

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);



    console.log('Il reste ' + days + " jours, " + hours + " heures, " +
        minutes + " minutes et " + seconds + " secondes avant " + EventDesc);
}

setInterval(() => {
    console.clear();
    let currentDate = new Date();
    computeXmas(currentDate);
    console.log('Nous sommes le ' + currentDate.toLocaleDateString() +
        ' et il est ' + currentDate.toLocaleTimeString());
}, 1000)