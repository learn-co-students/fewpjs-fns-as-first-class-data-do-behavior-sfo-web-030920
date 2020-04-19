/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let hour = time.split(':')[0]
  let minute = time.split(':')[1]
  let timeInteger = (parseInt(hour + minute))

  if (timeInteger < 1200) {
    return 'Good Morning'
  } else if (timeInteger > 1200 && timeInteger < 1700) {
    return 'Good Afternoon'
  } else if (timeInteger > 1800) {
    return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(displayContent) {
  document.getElementById('greeting').innerText = displayContent
}