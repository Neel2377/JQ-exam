let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})






var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Dataset #1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 20, 81, 56, 55, 40],
    }]
  };
  
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  
  new Chart('chart', {
    type: 'bar',
    options: options,
    data: data
  });
  



  var ctx = document.getElementById("myChart").getContext('2d');


  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
          datasets: [{
              label: 'Series 1', // Name the series
              data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
              fill: false,
              borderColor: '#2196f3', // Add custom color border (Line)
              backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
              borderWidth: 1 // Specify bar border width
          }]},
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      }
  });