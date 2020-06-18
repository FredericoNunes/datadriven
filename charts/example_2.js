var ctx = document.getElementById('myChart_2').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
        
            data: [8, 10, 5, 2, 20, 30, 45],
            backgroundColor: [
                'rgb(255, 99, 132, 0.7)',
                'rgb(54, 162, 235, 0.7)',
                'rgb(255, 206, 86, 0.7)',
                'rgb(75, 192, 192, 0.7)',
                'rgb(153, 102, 255, 0.7)',
                'rgb(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgb(255, 99, 132, 1)',
                'rgb(54, 162, 235, 1)',
                'rgb(255, 206, 86, 1)',
                'rgb(75, 192, 192, 1)',
                'rgb(153, 102, 255, 1)',
                'rgb(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        animation: {
            onProgress: function(animation) {
                progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
            }
        }
    }
});