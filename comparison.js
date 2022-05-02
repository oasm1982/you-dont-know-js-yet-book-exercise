const convertHourToMinutes = (startTime) => {
    const positionHour = startTime.indexOf(":");
    let hour = startTime.substring(0, positionHour);
    hour = parseInt(hour);
    hour = hour * 60;
    let minutes = startTime.substring(positionHour + 1);
    minutes = parseInt(minutes);
    const startTimeMinutes = hour + minutes;
    return startTimeMinutes;
}

const scheduleMeeting = (startTime,durationMinutes) => {
    const dayStart = "07:30";
    const dayEnd = "17:45";
    
    let dayStartMinutes = convertHourToMinutes(dayStart);
    let dayEndMinutes = convertHourToMinutes(dayEnd);
    let startMeeting = convertHourToMinutes(startTime);


    if( startMeeting < dayStartMinutes) {
        return false;
    } 
        
    if (startMeeting + durationMinutes > dayEndMinutes) {
        return false;
    }

    return true;   
}

module.exports = {
    scheduleMeeting,
    convertHourToMinutes,
}
