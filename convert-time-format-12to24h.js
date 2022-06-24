const suffixes = {
  AM: "am",
  PM: "pm",
};

function convertTimeFormat(time) {
  const timeArr = time.split(":");
  const timeSuffix = time.replace(/[^a-z]/gi, "").toLowerCase();
  const hoursStr = timeArr[0];
  const hours = +hoursStr;
  let minutesStr;
  try {
    minutesStr = timeArr[1].replace(/[^\d-]/g, "");
  } catch {
    console.log("Hours and minutes must be separated by a colon.");
    return `Your input: ${time}`;
  }
  const minutes = +minutesStr;
  let errorMessage;
  let hours24h;
  let time24h;

  switch (true) {
    case isNaN(hours) ||
      isNaN(minutes) ||
      minutesStr.length !== 2 ||
      hours <= 0 ||
      hours > 12 ||
      minutes < 0 ||
      minutes > 59 ||
      (timeSuffix !== suffixes.AM && timeSuffix !== suffixes.PM) ||
      time.length !== 7 ||
      hoursStr.length !== 2 ||
      timeArr.length !== 2:
      errorMessage =
        "Minutes must be a two digit number greater or equal to 0 and smaller than 60 and hours must be a number greater than 0 and smaller than 13. Example: 12:15AM.";
      break;
    case timeSuffix === suffixes.AM && hours !== 0:
      if (1 <= hours && hours < 12) {
        hours < 10 ? (hours24h = hours) : (hours24h = hours);
      } else if (hours === 12) {
        hours24h = 0;
      }
      break;
    case timeSuffix === suffixes.PM && hours !== 0:
      if (1 <= hours && hours < 12) {
        hours24h = hours + 12;
      } else if (hours === 12) {
        hours24h = hours;
      }
      break;
    default:
      errorMessage = "Invalid input.";
  }
  
  time24h = `${hours24h.toString().padStart(2, "0")}:${minutes}`;

  return !errorMessage ? time24h : `${errorMessage} Your input was ${time}.`;
}

console.log(convertTimeFormat("07:30am"));
