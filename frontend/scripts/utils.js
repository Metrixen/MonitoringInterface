const formatTime = (hour, min, sec) => {
    let formatted_hour = hour < 10 ? "0" + hour : hour;
    let formatted_minute = min < 10 ? "0" + min : min;
    let formatted_seconds = sec < 10 ? "0" + sec : sec;

    return "" + formatted_hour + ":" + formatted_minute + ":" + formatted_seconds;
}

const currentTime = () => {
    const start = new Date();
    let hours = start.getHours();
    let minutes = start.getMinutes();
    let seconds = start.getSeconds();

    return formatTime(hours,minutes,seconds);
}

export default currentTime;