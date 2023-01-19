const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const uppercaseLetters = "uppercaseLetters";
const lowercaseLetters = "lowercaseLetters";
const passwordNumbers = "passwordNumbers";
const specialCharacters = "specialCharacters";
const allNumbers = "1234567890";
const allSpecialCharacters = "~!@#$%^&*()_+=-`,./<>?;:";

const upperCheckBoxId = "uppercaseLettersCheckbox";
const lowerCheckBoxId = "lowercaseLettersCheckbox";
const numbersCheckBoxId = "passwordNumbersCheckbox";
const specialCheckBoxId = "specialCharactersCheckbox";

const getAllFields = () => {
  return {
    uppercaseLetters: getById(uppercaseLetters),
    lowercaseLetters: getById(lowercaseLetters),
    passwordNumbers: getById(passwordNumbers),
    specialCharacters: getById(specialCharacters),
  };
};

const setGeneratorText = (allFields) => {
  for (let key in allFields) {
    const element = allFields[key];
    if (key === uppercaseLetters) {
      // set the uppercase letters
      element.innerText = uppercase;
    } else if (key === lowercaseLetters) {
      // set the lowercase letters
      element.innerText = uppercase.toLowerCase();
    } else if (key === passwordNumbers) {
      element.innerText = allNumbers;
      // set the password numbers
    } else if (key === specialCharacters) {
      // set the special characters (default)
      element.innerText = allSpecialCharacters;
    }
  }
};

const getRandomCharacters = (array, rc = "") => {
  let randomCharacters = rc;
  array.forEach((data) => {
    if (data === uppercaseLetters) {
      const char = getRandomCharacter(uppercase);
      randomCharacters += char;
    } else if (data === lowercaseLetters) {
      const char = getRandomCharacter(uppercase.toLowerCase());
      randomCharacters += char;
    } else if (data === passwordNumbers) {
      const char = getRandomCharacter(allNumbers);
      randomCharacters += char;
    } else {
      const char = getRandomCharacter(allSpecialCharacters);
      randomCharacters += char;
    }
  });
  if (randomCharacters.length < 8) {
    return getRandomCharacters(array, randomCharacters);
  } else {
    return randomCharacters;
  }
};

const generatePassword = () => {
  const allBoxesChecked = getCheckboxes();
  const passwordBtn = getById("passwordBtn");
  passwordBtn.innerText = getRandomCharacters(allBoxesChecked);
};

const getCheckboxes = () => {
  const uppercaseCheckbox = getById(upperCheckBoxId);
  const lowercaseCheckbox = getById(lowerCheckBoxId);
  const numbersCheckbox = getById(numbersCheckBoxId);
  const specialCheckbox = getById(specialCheckBoxId);

  const uppercaseChecked = uppercaseCheckbox.checked;
  const lowercaseChecked = lowercaseCheckbox.checked;
  const numbersChecked = numbersCheckbox.checked;
  const specialChecked = specialCheckbox.checked;

  const allCheckedValues = [];
  if (uppercaseChecked) {
    allCheckedValues.push(uppercaseLetters);
  }
  if (lowercaseChecked) {
    allCheckedValues.push(lowercaseLetters);
  }
  if (numbersChecked) {
    allCheckedValues.push(passwordNumbers);
  }
  if (specialChecked) {
    allCheckedValues.push(specialCharacters);
  }
  return allCheckedValues;
};

const copyPassword = () => {
  const passwordBtn = getById("passwordBtn").innerText;
  navigator.clipboard
    .writeText(passwordBtn)
    .then(() => {
      getById("passwordBtn").innerText = "Copied!";
      setTimeout(() => {
        getById("passwordBtn").innerText = passwordBtn;
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
};

const setPasswordOptions = () => {
  const allFields = getAllFields();

  setGeneratorText(allFields);
};

setPasswordOptions();
