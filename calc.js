function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});