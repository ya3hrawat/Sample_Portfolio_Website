const preloadAnimationModule = (function() {
    document.querySelector('main').style.display = "none"
    window.onload = function () {
        document.querySelector('.container-animate').style.display = "flex"
    }
    setTimeout(() => {
        document.querySelector('.container-animate').classList.add('disappear')
    }, 3200)
    setTimeout(() => {
        document.querySelector('main').style.display = "block"
    }, 3700)
})();


window.onscroll = () => {
    const section = document.querySelectorAll('section')
    
    section.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 200
        let height = sec.offsetHeight

        if(top >= offset && top <= offset + height) {
            if (sec === section[1]){
                sec.classList.add('show-animate')
            }
            if (sec === section[2]) {
                sec.classList.add('show-animate')
            }
        }
        else {
            sec.classList.remove('show-animate')
        }
    })
}


// const animatedSliderModule = (function() {
//     let track = document.querySelector('.track');

//     const slider = document.querySelector('.slider');
    
//     window.onmousedown = e => {
//         track.dataset.mouseDownAt = e.clientX;
//     }

//     window.onmouseup = e => {
//         track.dataset.mouseDownAt ='0';
//         track.dataset.prevPercentage = track.dataset.Percentage;
//     }

//     window.onmousemove = e => {
//         if(track.dataset.mouseDownAt === "0") {
//             return;
//         }

//         const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
//         const maxDelta = window.innerWidth / 2;

//         const percentage = (mouseDelta / maxDelta) * -100;

//         let newPercentage = parseFloat(track.dataset.prevPercentage) + percentage

//        if(newPercentage >= -100 && newPercentage <=0) {
//         track.dataset.Percentage = newPercentage;
        
//         slider.animate({
//             transform: `translate(${newPercentage}%, -50%)`
//         }, {duration: 1500, fill: 'forwards'});
//         }
//     }
// })();

const navModule = (function() {
    const section = document.querySelectorAll('.section')
    const a = document.querySelectorAll('nav ul li a');
})();