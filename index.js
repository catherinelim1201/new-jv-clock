const indicator = (hour) => {
  return (hour >= 12) ? "PM" : "AM"
}

const showTime = () => {
  const date = new Date()

  let hour = date.getHours()
  hour = (hour < 10) ? "0" + hour : hour

  let min = date.getMinutes()
  min = (min < 10) ? "0" +min :min

  let sec = date.getSeconds()
  sec = (sec < 10) ? "0" +sec :sec

  const getIndicator = indicator(hour)

  const display = document.querySelector("#clockDisplay")
  display.innerHTML = `${hour}: ${min}: ${sec} ${getIndicator}`

  setTimeout(showTime, 1000)
}

showTime()

const box = document.querySelector("div")

function bgChange(color) {
  box.style.background = color
}
