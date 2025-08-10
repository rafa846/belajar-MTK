const body = document.body
const number2 = Math.floor(Math.random() * 100)
const number1 = Math.floor(Math.random() * 100)
const soal = number1 + "+" + number2
const jawaban = number1 + number2
const input = document.getElementById('input')
const display = document.getElementById('display')
const submit = document.getElementById('btn')

const h1 = document.createElement('h1')
h1.textContent = soal
display.append(h1)
submit.addEventListener("click", function () {

    if (input.value == jawaban) {
        alert("kamu benarrrrrr")
        
    } else {
        alert("belajar lagi dekkkkkkk")
    }
})



