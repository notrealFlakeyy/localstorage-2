let counter = localStorage.getItem("counter") || 0
let counterEl = document.getElementById("counter")
let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")

function incrementCounter() {
    counter++
    counterEl.innerText = counter
    localStorage.setItem("counter", counter)
}

function decrementCounter() {
    counter--
    counterEl.innerText = counter
    localStorage.setItem("counter", counter)
}

plusBtn.addEventListener("click", incrementCounter)
minusBtn.addEventListener("click", decrementCounter)