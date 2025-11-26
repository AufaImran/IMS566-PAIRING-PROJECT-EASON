// Focus now punya progress bar
function createProgressBar(canvasId, value, color) {
  const progress = document.getElementById(canvasId);

  new Chart(progress, {
    type: "bar",
    data: {
      labels: [""],
      datasets: [
        {
          data: [value],
          backgroundColor: color,
          borderWidth: 0,
          barThickness: 30
        }
      ]
    },
    options: {
      indexAxis: "y",
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          min: 0,
          max: 100,
          ticks: { display: false },
          grid: { display: false }
        },
        y: {
          ticks: { display: false },
          grid: { display: false }
        }
      }
    }
  });
}
createProgressBar("focusnow565", 80, "rgba(255, 255, 255, 1)");
createProgressBar("focusnow566", 50, "rgba(255, 255, 255, 1)");
createProgressBar("focusnow564", 16,  "rgba(255, 255, 255, 1)");



// overall schedule progress punya bar chart
const inti = document.getElementById("dailyprogress");
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const data = {
  labels: labels,
  datasets: [{
    label: "Daily Progress",
    data: [100, 55, 10, 10, 80, 50, 50],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 205, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(201, 203, 207, 0.2)"
    ],
    borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)",
      "rgb(153, 102, 255)",
      "rgb(201, 203, 207)"
    ],
    borderWidth: 1
  }]
};
new Chart(inti, {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
