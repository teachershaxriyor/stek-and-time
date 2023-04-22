//setTimeout, setInterval, clearInterval
setTimeout(() =>{
    console.log("shaxriyor");
}, 3000)

let fn = () => {
    i++
    document.querySelector('h2').innerText = i
}

let i = 0
let b = setInterval(fn, 10)

document.querySelector('.st').addEventListener('click',() => {
    b = setInterval(fn)
})

document.querySelector('button').addEventListener('click',() => {
    clearInterval(b)
})