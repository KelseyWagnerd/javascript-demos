// Variables: //
// cost
// tip
// numberOfPeople
// pay

// Check if all 3 fields are entered.
const allFieldsEntered = (cost, tip, numberOfPeople) => {
  const hasCostValue = cost.value.length > 0;
  const hasTipValue = tip.value.length > 0;
  const hasPplValue = numberOfPeople.value.length > 0;

  // Return true only if all 3 are true
  return hasCostValue && hasTipValue && hasPplValue;
};

// Do the maffs
const setSplitAmount = (cost, tip, numberOfPeople) => {
  // Convert the strings to decimals
  const c = parseFloat(cost.value);
  const t = parseFloat(tip.value) / 100;
  const p = parseFloat(numberOfPeople.value);
  // maffs
  const total = (c + c * t) / p;
  // show in app box
  const pay = getById("pay");
  pay.innerText = "$" + total.toFixed(2); // Fixed to 2 decimal places
};

const cost = getById("cost");
const tip = getById("tip");
const numberOfPeople = getById("numberOfPeople");
const valueOfCost = cost.value;

// If all 3 fields are entered, calculate
const calculateTip = () => {
  const cost = getById("cost");
  const tip = getById("tip");
  const numberOfPeople = getById("numberOfPeople");

  const hasAllFields = allFieldsEntered(cost, tip, numberOfPeople);
  if (hasAllFields) {
    // do maffs
    setSplitAmount(cost, tip, numberOfPeople);
  }
};
