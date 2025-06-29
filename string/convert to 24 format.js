const time = "08:30:34PM";

function ConvertTo24FormatTime(time) {
  let periods = time.slice(-2);
  let timeParts = time.slice(0, 8);
  let [hh, mm, ss] = timeParts.split(":");

  hh = parseInt(hh);
  if (periods === "AM") {
    if (hh === 12) hh = 0;
  } else {
    if (hh !== 12) hh += 12;
  }
  let hour = hh.toString().padStart(2, "0");

  return `${hour}:${mm}:${ss}`;
}

console.log(ConvertTo24FormatTime(time)); // Output: "14:30:34"
