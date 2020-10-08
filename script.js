const billInput = document.querySelector("#input-bill");
const tipInput = document.querySelector("#input-tip");
const peopleInput = document.querySelector("#input-people");
const display = document.querySelector("#display");

function calculateTip() {
    const billAmount = Number(billInput.value);
    const tipAmount = Number(tipInput.value);
    const peopleAmount = peopleInput.value;
    const tipCalculated = (billAmount * tipAmount) / 100 / peopleAmount;

    display.innerHTML = `Suggested tip is $${tipCalculated.toFixed(2)}`;
}

function calculateTotal() {
    const billAmount = Number(billInput.value);
    const tipAmount = Number(tipInput.value);
    const peopleAmount = peopleInput.value;
    const tipCalculated = (billAmount * tipAmount) / 100;

    const totalAmount = billAmount + tipCalculated;

    display.innerHTML = `Suggested tip is $${tipCalculated.toFixed(2)}`;
    if (peopleAmount > 1) {
        totalAmount = totalAmount / peopleAmount;
        display.innerHTML = `Total per person: $${totalAmount.toFixed(2)}`;
    }
    display.innerHTML = `Total: $${totalAmount.toFixed(2)}`;
}
billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);
billInput.addEventListener("input", calculateTotal);
tipInput.addEventListener("input", calculateTotal);
peopleInput.addEventListener("input", calculateTotal);

calculateTip();
calculateTotal();
