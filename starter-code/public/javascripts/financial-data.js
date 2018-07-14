const bitcoinInfo = axios.create({
  baseURL: '/datos'
});

bitcoinInfo.get()
.then((response)=>{
  printTheChart(response.data);
})
.catch((err)=>{
  console.log(err);
})

let printTheChart = ((stockData)=>{
  let stockLabels = Object.keys(stockData);
  let stockPrice = Object.values(stockData);
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data : {
      labels: stockLabels,
      datasets: [{
        label: "Bitcoin Chart",
        backgroundColor: 'rgb(255, 99,132)',
        borderColor: 'rgb(255,99,132)',
        data: stockPrice
      }]
    }
  });
});
