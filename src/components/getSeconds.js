export default function getSeconds() {
    let seconds = new Date().getSeconds();
    
    if (seconds < 10) {
        return '0' + seconds;
    }
    if (seconds === 60) {
        return '00';
    }
    return seconds;
}

