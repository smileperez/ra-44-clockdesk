export default function getMinutes(realTime) {
	let minutes = realTime.getMinutes();

	if (minutes < 10) {
		 return '0' + minutes;
	}
	if (minutes === 60) return '00';

	return minutes;
}