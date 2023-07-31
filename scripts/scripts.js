function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
    var data = [10, 5, 8, 12, 7];

    var ctx = document.getElementById('lineChart').getContext('2d');
    var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Ventas',
                data: data,
                borderColor: '#B2D6E7',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            elements: {
                line: {
                    tension: 0,
                },
                point: {
                    radius: 0,
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });
});
