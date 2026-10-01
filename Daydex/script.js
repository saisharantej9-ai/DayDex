const months = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 }
];

const container = document.getElementById("calendar");

months.forEach((month) => {
  const monthDiv = document.createElement("div");
  monthDiv.className = "month";

  const title = document.createElement("div");
  title.className = "month-title";
  title.innerText = month.name;
  monthDiv.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "days-grid";

  for (let day = 1; day <= month.days; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.innerText = day;
    grid.appendChild(dayDiv);
  }

  monthDiv.appendChild(grid);
  container.appendChild(monthDiv);
});