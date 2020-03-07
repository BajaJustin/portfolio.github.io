// Constants for the time of day
const MORNING = 6;
const NOON = 12;
const EVENING = 5;
var meridian = "AM";
var videoDisplayed = document.querySelector('#video');
var clock = document.querySelector('#clock');

// Initial Video
var time = new Date();
var tempHour = time.getHours();

if(tempHour >= 12){
  meridian = "PM";
}
if(tempHour >= 12){
  tempHour = tempHour - 12;
}
if (tempHour >= MORNING && tempHour < NOON && meridian == "AM"){
  videoDisplayed.src = "https://www.youtube.com/embed/XULUBg_ZcAU";
}
else if (tempHour == NOON || tempHour < EVENING && meridian == "PM"){
  videoDisplayed.src = "https://www.youtube.com/embed/6P_cd7TbmMQ";
}
else if (tempHour >= EVENING && meridian == "PM"){
  videoDisplayed.src = "https://www.youtube.com/embed/5qap5aO4i9A";
}

/* 
  Get current time, display on screen 
*/
function currentTime(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  let isMorning = false;
  let isNoon = false;
  let isEvening = false;

  if ( hours >= 12 )
  {
    meridian = "PM";
  }
  // Update the hours to display in standard time
  if ( hours > 12)
  {
    hours = hours - 12;
  }
  // Set Minutes to have a leading zero if under 10
  if ( minutes < 10 )
  {
    minutes = "0" + minutes;
  }
  // Set Seconds to have a leading zero if under 10
  if( seconds < 10 )
  {
    seconds = "0" + seconds;
  }

  // String format of current time
  var displayTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

  clock.innerText = displayTime;

  // Check every hour for time of day
  // Checking Morning time
  if (hours >= MORNING && hours < NOON && meridian == "AM" && minutes == 0 && seconds == 0){
    isMorning = true;
    isNoon = false;
    isEvening = false;
    changeMusic(isMorning, isNoon, isEvening);
  }
  // Checking if Noon
  else if (( hours == NOON || hours < EVENING ) && meridian == "PM" && minutes == 0 && seconds == 0){
    isMorning = false;
    isNoon = true;
    isEvening = false;
    changeMusic(isMorning, isNoon, isEvening);
  }
  // Checking if Evening
  else if ( hours >= EVENING && meridian == "PM" && minutes == 0 && seconds == 0 ){
    isMorning = false;
    isNoon = false;
    isEvening = true;
    changeMusic(isMorning, isNoon, isEvening);
  }
} //------------------ currentTime() ---------------------

/* 
  Changes music depending on current time of day
*/
function changeMusic(isMorning, isNoon, isEvening) {
  // If morning, change music
  if ( isMorning ){
    videoDisplayed.src = "https://www.youtube.com/embed/XULUBg_ZcAU";
  }
  // If noon, change music
  else if ( isNoon ){
    videoDisplayed.src = "https://www.youtube.com/embed/6P_cd7TbmMQ";
  }
  // If evening, change music
  else if ( isEvening ){
    videoDisplayed.src = "https://www.youtube.com/embed/5qap5aO4i9A";
  }
} //------------------ changeMusic() ---------------------

// Updates the clock every second
setInterval(currentTime, 1000);