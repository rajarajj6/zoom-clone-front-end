const solutions = document.querySelector('#solutions');
const solutiondrop = document.querySelector('.dropdown-solutions');
const host = document.querySelector('.hostdrop');
const hostdrop = document.querySelector('.host-dropdown');
const res = document.querySelector('.res');
const resdrop = document.querySelector('.res-dropdown');

solutions.addEventListener('mouseover', () => {
    solutiondrop.style.display = "flex";
    solutions.style.color = '#2d8cff'
})

solutiondrop.addEventListener('mouseleave', () => {
    setTimeout(() => {
        solutiondrop.style.display = 'none';
        solutions.style.color = '#999'
    }, 500);
})

host.addEventListener('mouseover', () => {
    hostdrop.style.display = "flex";
})

hostdrop.addEventListener('mouseleave', () => {
    setTimeout(() => {
        hostdrop.style.display = 'none';
    }, 100);
})

res.addEventListener('mouseover', () => {
    resdrop.style.display = "flex";
})

resdrop.addEventListener('mouseleave', () => {
    setTimeout(() => {
        resdrop.style.display = 'none';
    }, 100);
})