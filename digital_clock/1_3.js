// const clock = document.getElementById('clock')

const clock = document.querySelector('#clock')

// clock must change evey seconds



// make it write insid setInterval
/* let date = new Date()

console.log(date.toLocaleDateString) ; */


/* 
setInterval =>  

-> setInterval(function(){} , t(ms))

*/

setInterval(function(){
    let date = new Date()
    console.log(date.toLocaleDateString) ;

    clock.innerHTML = date.toLocaleTimeString() ;
} , 1000)