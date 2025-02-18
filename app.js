const buttons = document.querySelectorAll('.box');
const body = document.querySelector('body');

buttons.forEach(function(box){
    box.addEventListener('click',function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = 'red';
            body.style.color = 'black';
        }else if(color.target.id === 'box2'){
            body.style.backgroundColor = 'green';
            body.style.color = 'white';
        }else if(color.target.id === 'box3'){
            body.style.backgroundColor = 'blue';
            body.style.color = 'white';
        }else if(color.target.id === 'box4'){
            body.style.backgroundColor = 'yellow';
            body.style.color = 'black';
        }else if(color.target.id === 'box5'){
            body.style.backgroundColor = '#ff00ff';
            body.style.color = 'white';
        }
    })
})