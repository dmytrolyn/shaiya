export const getTimeString = (left) => {
    if(left > 0) {
        let days = parseInt(left / (24 * 60 * 60), 10);
        let hours = parseInt((left % (60 * 60 * 24)) / (60 * 60), 10);
        let minutes = parseInt((left % (60 * 60)) / 60, 10);
        let seconds = parseInt(left % 60, 10);
        hours = (hours < 10) ? "0" + hours : hours;
        days = (days < 10) ? "0" + days : days
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return days + ":" + hours + ":" + minutes + ":" + seconds;
    } else {
        return "Now!";
    }
}