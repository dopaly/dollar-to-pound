window.oninput = function () {

let g = document.querySelector('.result')
let n1 = document.querySelector('input').value
let n2 = (n1*24.57)

g.textContent = `[${n1}] Dollar =[${n2}] Egyptian Pound`
}
