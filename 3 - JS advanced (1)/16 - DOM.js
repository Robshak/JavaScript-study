'use strict';

const wrapper = document.querySelector('.wrapper');

for(let i = 0; i< 100; i++){
    const inner = document.createElement('div');
    inner.classList.add('inner');
    inner.innerHTML = `${i}`
    wrapper.append(inner);
}

function search(event){
    // console.log(event.target.value);
    for(const element of wrapper.children){
        if(element.innerHTML.includes(event.target.value)){
            element.classList.add('activeInner');
        }
        else{
            element.classList.remove('activeInner');
        }
    }
}