export default function getHours(realTime, zone) {

    const myZone = -(new Date().getTimezoneOffset() / 60);
	
    let shift = Number(zone);
	let hour = realTime.getHours() - myZone;
	if (!isNaN(shift)) {
		 if (shift > 12) shift = 12;
		 if (shift < -12) shift = -12;
		 hour += shift;
	}

	if (hour < 0) hour = 24 + hour;
	if (hour > 24) hour -= 24;

	if (hour < 10 && hour > -1) {
		 hour = '0' + hour;
	}

	if (hour === 24) return '00';

	return hour;
}