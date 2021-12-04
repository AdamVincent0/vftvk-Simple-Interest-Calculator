const yearsInput = document.getElementById("years");
const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const rateOutput = document.getElementById("rate_val");
const resultOutput = document.getElementById("result");

function compute() {
    const rate = rateInput.value;
    const years = yearsInput.value;
    const principal = principalInput.value;
    const interest = principal * years * rate / 100;
    const year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0) {
        window.alert("Enter a positive number");
        return;
    }

    resultOutput.innerHTML = `
    If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${interest}</mark>,<br>
    in the year <mark>${year}</mark>.
    `;
    principalInput.focus();
}

function updateRate() {
    rateOutput.innerText = rateInput.value + "%";
}
