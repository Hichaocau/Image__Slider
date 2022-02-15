let i = 0; //current slide
let j = 5; //total slide

const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')
const dots = document.querySelectorAll('.dot-container button')
const images = document.querySelectorAll('.image-container img')

function next(){
    console.log(i)
    document.getElementById('content' + (i+1)).classList.remove("active"); 
    i = ( j + i + 1) % j; //lấy số dư
    console.log(i)
    document.getElementById('content' + (i+1)).classList.add("active"); 
    dotsActive(i + 1)
}

function prev(){
    document.getElementById('content' + (i+1)).classList.remove("active"); 
    i = ( j + i - 1) % j; //lấy số dư
    console.log(i)
    document.getElementById('content' + (i+1)).classList.add("active"); 
    dotsActive(i + 1)
}

// change bgc dots
function dotsActive(num){
    dots.forEach(function(dot){
        dot.style.background = 'transparent'
    });
    document.querySelector('.dot-container button:nth-child('+ num +')').style.background = '#8052ec'
}

btnNext.addEventListener('click', next)
btnPrev.addEventListener('click', prev)

// dot click
function dot(index){
    images.forEach(function(img){
        img.classList.remove('active')
    })
    document.getElementById('content' + index).classList.add("active"); 
    i = index -1 
    console.log(i)
    dotsActive(index)
}
