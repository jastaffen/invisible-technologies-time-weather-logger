export const configureTime = timezone => {
    let d = new Date()
    let localHour = (parseInt(timezone) / 60) / 60
    let hourlyArr = calculateHour(d.getUTCHours(), localHour)
    let minutes = handleMinutes(d.getMinutes())
    let seconds = handleSecond(d.getSeconds())
    return `${hourlyArr[0]}:${minutes}:${seconds} ${hourlyArr[1]}`
}

function calculateHour(hour, localHour) {
    let total = Math.abs(hour + localHour)
    if (total === 12) return [total, 'PM']
    return total > 12 ? [total - 12, 'PM'] : [`0${total}`, 'AM']
}

function handleMinutes(minutes) {
    return minutes.toString().length > 1 ? minutes : `0${minutes}`
}

function handleSecond(seconds) {
    return seconds.toString().length > 1 ? seconds : `0${seconds}`
}
