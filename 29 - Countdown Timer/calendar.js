const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthHeading = document.querySelector('.date h1');
  const dateHeading = document.querySelector('.date p');
  const monthDays = document.querySelector('.days');

  // Find ending date of a month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  monthHeading.innerHTML = months[date.getMonth()];
  dateHeading.innerHTML = new Date().toDateString();

  let days = '';

  for (let x = firstDayIndex; x > 0; x -= 1) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i += 1) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j += 1) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

leftArrow.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

rightArrow.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
