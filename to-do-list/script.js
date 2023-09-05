let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let ul = document.querySelector('.ul');

btn.addEventListener('click',function(){
    console.log(input.value);
    let li = document.createElement('li');
    console.log(li);
    li.innerHTML = input.value
    ul.appendChild(li)

    let span = document.createElement('span');
    span.innerHTML = ' X'
    li.appendChild(span)
    input.value=''
})

ul.addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName == 'LI'){
        alert('click to cross')
    }else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove()
        
    }
})
let resetBtn=document.querySelector('.resetBtn');
resetBtn.addEventListener('click',function(e){
    if(e.target.className == 'resetBtn'){
        ul.innerHTML='';
    }
})