let dom = document;

let outputZone = dom.getElementById('outputZone');
let submitButton = dom.getElementById('submitButton');
let nameEntry = dom.getElementById('name');
let celsiusEntry = dom.getElementById('celsius');

function submitClicked(event) {
  event.preventDefault();
  const name = nameEntry.value;
  outputZone.innerHTML = `<p><strong>Hello</strong> there ${name}.</p>`;
  // nameEntry.value = "" // Clear the entry in the Name text field
  nameEntry.select();
  nameEntry.focus();
}

function textChanged(event) {
  const name = nameEntry.value;
  outputZone.innerHTML = `<p><strong>Hello</strong> there ${name}.</p>`;
}

const temperatureChanged = (event) => {
  const temp = parseFloat(celsiusEntry.value);
  let kelvin = (273.16 + temp).toFixed(2);
  style = changeCelsiusColour(temp);
  outputZone.innerHTML = `<p><span class="font-bold ${style}">
                    ${temp}&deg;C</span> is ${kelvin}K.</p>`;
};

function changeCelsiusColour(temperature) {
  let colour = 'blue';
  if (temperature > 45) {
    colour = 'red';
  } else if (temperature > 0) {
    colour = 'green';
  }
  return `text-${colour}-500`;
}

submitButton.addEventListener('click', submitClicked);

nameEntry.addEventListener('change', textChanged);
nameEntry.addEventListener('keyup', textChanged);

celsiusEntry.addEventListener('keyup', temperatureChanged);
celsiusEntry.addEventListener('keypress', temperatureChanged);