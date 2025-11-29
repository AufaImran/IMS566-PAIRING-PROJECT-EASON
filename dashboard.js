// Focus now punya progress bar
function createProgressBar(canvasId, value) {
  const progress = document.getElementById(canvasId);

  new Chart(progress, {
    type: "bar",
    data: {
      labels: [""],
      datasets: [
        {
          label: "Progress",
          data: [value],
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderWidth: 0,
          barThickness: 30
        },
        {
          label: "Remaining",
          data: [100 - value],
          backgroundColor: "rgba(255, 255, 255, 0.3)",
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
          stacked: true,
          min: 0,
          max: 100,
          ticks: { display: false },
          grid: { display: false }
        },
        y: {
          stacked: true,
          ticks: { display: false },
          grid: { display: false }
        }
      }
    }
  });
}
createProgressBar("focusnow565", 89, "rgba(255, 255, 255, 1)");
createProgressBar("focusnow566", 60, "rgba(255, 255, 255, 1)");
createProgressBar("focusnow564", 18,  "rgba(255, 255, 255, 1)");



// overall schedule progress punya bar chart
const inti = document.getElementById("dailyprogress");
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const data = {
  labels: labels,
  datasets: [{
    label: "Daily Progress",
    data: [100, 55, 10, 10, 80, 50, 50],
    backgroundColor: [
      "rgba(1, 177, 24, 1)",
      "rgba(255, 204, 86, 1)",
      "rgba(49, 155, 255, 1)",
      "rgba(49, 155, 255, 1)",
      "rgba(255, 204, 86, 1)",
      "rgba(80, 76, 88, 1)",
      "rgba(80, 76, 88, 1)"
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
