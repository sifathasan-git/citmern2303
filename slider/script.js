let slider = document.querySelectorAll('.slide')
console.log(slider);
let sliderArray = Array.from(slider);
console.log(sliderArray);
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click',function(){
    let activeSlider = document.querySelector('.active');
    console.log(activeSlider);
    let currentIndex = sliderArray.indexOf(activeSlider);
    console.log(currentIndex);
    
        let next;
        if(currentIndex === sliderArray.length - 1){
            next = sliderArray[0];
            activeSlider.classList.remove('active');
            next.classList.add('active');
        }
        else{
            next = sliderArray[currentIndex+1];
            activeSlider.classList.remove('active');
            next.classList.add('active');
        }
    
})
prev.addEventListener('click',function(){
    let activeSlider = document.querySelector('.active');
    console.log(activeSlider);
    let currentIndex = sliderArray.indexOf(activeSlider);
    console.log(currentIndex);
    
        let prev;
        if(currentIndex != 0){
            prev = sliderArray[currentIndex-1];
            console.log(prev);
            activeSlider.classList.remove('active');
            prev.classList.add('active');
        }
        else{
            prev = sliderArray[sliderArray.length - 1];
            activeSlider.classList.remove('active');
            prev.classList.add('active');
        }
    
})

// let prev = document.querySelector('.prev');

// prev.addEventListener('click',function(){
//     let activeSlider = document.querySelector('.active');
//     console.log(activeSlider);
//     let currentIndex = sliderArray.indexOf(activeSlider);
//     console.log(currentIndex);

//     function prev(){
//         let prev;
//         if(currentIndex == sliderArray[0]){
//             prev = sliderArray.length-1;
//             activeSlider.classList.remove('active');
//             prev.classList.add('active');
//         }
//         else{
//             prev = sliderArray[currentIndex-1];
//             activeSlider.classList.remove('active');
//             prev.classList.add('active');
//         }
//     }
//     prev()
// })
