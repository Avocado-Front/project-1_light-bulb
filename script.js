let bulbLight = document.querySelector('.bulb')
let btn = document.querySelector('.btn')

let body = document.querySelector('body')
btn.addEventListener('click',function(){
    if(btn.innerHTML === 'Turn on'){
        bulbLight.src = 'bulbon.gif'
        btn.innerHTML = 'Turn off'
        body.style.backgroundColor = 'rgba(202, 242, 193, 0.885)'

    }else if(btn.innerHTML === 'Turn off'){
        bulbLight.src = 'bulboff.gif'
        btn.innerHTML = 'Turn on'
        body.style.backgroundColor = 'rgba(7, 7, 7, 0.885)'
    }
})
