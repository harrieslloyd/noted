window.addEventListener("keyup", setNote);

const days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

function setNote() {
  var note = document.getElementById('noteInput').value
  var today = new Date();
  var year = today.getFullYear()
  year += 1
  const d = new Date(`December 31, ${year} 12:00:00`);
  let day = d.getDay();
  document.cookie = `note=${note}; expires=${days[day]}, 31 Dec ${year} 12:00:00 UTC`;
}

function checkCookies() {
  const str = document.cookie
  const words = str.split('=');
  const note = words[1];
  document.getElementById('noteInput').value = note
}

