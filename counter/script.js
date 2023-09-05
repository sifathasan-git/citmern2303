let c1 = setInterval(counter1,10)
let c2 = setInterval(counter2,10)
let c3 = setInterval(counter3,10)
let count1=1;
let count2=1;
let count3=1;
function counter1(){
    count1++
    document.querySelector("#number1").innerHTML=count1;
    if(count1 == 150){
        clearInterval(c1)
    }
}
function counter2(){
    count2++
    document.querySelector("#number2").innerHTML=count2;
    if(count2 == 200){
        clearInterval(c2)
    }
}
function counter3(){
    count3++
    document.querySelector("#number3").innerHTML=count3;
    if(count3 == 250){
        clearInterval(c3)
    }
}