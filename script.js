const form = document.getElementById("date-form");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const yearsOutput = document.getElementById("years");
const monthsOutput = document.getElementById("months");
const daysOutput = document.getElementById("days");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateAge();
});

function calculateAge() {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonth = currentDate.getMonth() - birthDate.getMonth();
  let ageDay = currentDate.getDate() - birthDate.getDate();

  if (ageDay < 0) {
    ageMonth--;
    ageDay += extraDays(birthDate.getMonth(), birthDate.getFullYear());
  }

  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  yearsOutput.textContent = ageYear;
  monthsOutput.textContent = ageMonth;
  daysOutput.textContent = ageDay;
}

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year
  );
}

function extraDays(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
