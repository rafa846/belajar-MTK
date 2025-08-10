const body = document.body
const number2 = Math.floor(Math.random() * 11)
const number1 = Math.floor(Math.random() * 20)
const soal = number1 + " x " + number2
const jawaban = number1 * number2
const input = document.getElementById('input')
const display = document.getElementById('display')
const submit = document.getElementById('btn')

const h1 = document.createElement('h1')
h1.textContent = soal
h1.style.color = "white"
display.append(h1)
submit.addEventListener("click", function () {

    if (input.value == jawaban) {
        alert("kamu benarrrrrr")
        location.reload()

    } else if (input.value.trim() == "") {
        alert('isi dulu dongg')
    }
    else {
        alert("salah yang bener itu " + jawaban)
        location.reload()

    }
})



