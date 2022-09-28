let usersData = window.localStorage.getItem("UserList");
let userData = usersData ? JSON.parse(usersData) : [];

const xLabel = [];
const yLabel = [];

userData.forEach((user, i) => {
  xLabel.push(user.name);
  yLabel.push(i + 1);
});

const barChart = document.querySelector("#bar-chart").getContext("2d"),
  lineChart = document.querySelector("#line-chart").getContext("2d"),
  pieChart = document.querySelector("#pie-chart").getContext("2d");

chartMaker(barChart, "bar");
chartMaker(lineChart, "line");
chartMaker(pieChart, "pie");

///function to make chart ::::;Paramterter(element to make chart one, type of the chart rolled under inverted comma)
function chartMaker(canvasElement, chartType) {
  new Chart(canvasElement, {
    type: chartType,
    data: {
      labels: xLabel,
      datasets: [
        {
          label: "Index of User",
          data: yLabel,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],

          borderWidth: 1,
          hoverBorderWidth: 4,
          hoverBorderColor: "#0a2558",
          hoverBackgroundColor: "#0a2558",
        },
      ],
    },
    options: {
        plugins:{
            title: {
                display: true,
                text: "Index of User",
                fontSize: 24,
                textAlign:'center'
              },
              legend: {
                display: false,
              },
              tooltip:{
                enabled:false,
              }
        },
      
      scales: {
        y: {
          ticks: {
            display: false,
          },
        },
      },
    },
  });
  console.log();
}
