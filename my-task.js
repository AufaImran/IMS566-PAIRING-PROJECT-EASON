// my-task.js
// JavaScript Lisa untuk chart di My Task page

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("myTaskChart");
  if (!canvas) return; // kalau id tak jumpa, jangan crash

  const ctx = canvas.getContext("2d");

  // Data ikut table "Tasks Progress" kau:
  // Mon: completed 4, Tue: 2, Wed: 1, Thu: 2, Fri: 1
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const tasksCompleted = [4, 2, 1, 2, 1];

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Tasks Completed",
          data: tasksCompleted,
          backgroundColor: "rgba(83, 91, 236, 0.8)",
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
          title: {
            display: true,
            text: "Number of Tasks",
          },
        },
        x: {
          title: {
            display: true,
            text: "Day of Week",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.parsed.y + " tasks completed";
            },
          },
        },
      },
    },
  });
});
