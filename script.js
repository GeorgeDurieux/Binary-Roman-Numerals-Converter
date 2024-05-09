const inputField = document.getElementById('input-field');
const convertButton = document.getElementById('convert-button');
const resultText = document.getElementById('result-text');

function checkInput () {
  var arabic = parseInt(inputField.value);
  if (!inputField.value || isNaN(arabic)) {
    alert('Please provide a natural number');
    return;
  } else {
    const roman = convertToRoman(arabic);
    const binary = convertToBinary(arabic);
    inputField.value = '';
    resultText.innerHTML = `
    <table id="result-table">
      <tr>
        <th>Arabic</th>
        <th>Roman</th>
        <th>Binary</th>
      </tr>
      <tr>
        <td>${arabic}</td>
        <td>${roman}</td>
        <td>${binary}</td>
      </tr>
    </table>
    <p>*Press Esc to clear</p>
  `;
  }
};

function convertToRoman () {
  var arabic = parseInt(inputField.value);
  var roman = '';
  const table = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  
  for (const number in table) {
    while (arabic >= table[number]) {
      roman += number;
      arabic -= table[number];
    }
  }  
  return roman;
};

function convertToBinary (number) {
  if (number === 0 || number === 1) {
    return String(number);
  } else {
    return convertToBinary(Math.floor(number / 2)) + (number % 2);
  }
};

convertButton.addEventListener('click', checkInput);

inputField.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkInput();
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    inputField.value = '';
    resultText.innerHTML = '';
  }
})
