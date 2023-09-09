
document.addEventListener('DOMContentLoaded', function () {
    const loanAmountInput = document.getElementById('loan-amount');
    const interestRateInput = document.getElementById('interest-rate');
    const loanTermInput = document.getElementById('loan-term');
    const calculateButton = document.getElementById('calculate-button');
    const resetButton = document.getElementById('reset-button');
    const resultElement = document.getElementById('result');

    // Function to reset input fields
    function resetInputs() {
        loanAmountInput.value = '';
        interestRateInput.value = '';
        loanTermInput.value = '';
        resultElement.innerHTML = ''; // Clear the result
    }

    // Event listener for the "Calculate" button
    document.getElementById('loan-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const loanAmount = parseFloat(loanAmountInput.value);
        const interestRate = parseFloat(interestRateInput.value);
        const loanTerm = parseFloat(loanTermInput.value);

        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
            resultElement.innerHTML = '<p>Please enter valid numbers in all fields.</p>';
            return;
        }

        const monthlyInterestRate = interestRate / 100 / 12;
        const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
        const totalPayment = monthlyPayment * loanTerm;

        resultElement.innerHTML = `
            <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
            <p>Total Payment: $${totalPayment.toFixed(2)}</p>
        `;
    });

    // Event listener for the "Reset" button
    resetButton.addEventListener('click', function () {
        resetInputs();
    });
});
