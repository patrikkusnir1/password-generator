const characters = [
  "A","B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
  "X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","n","o","p","q","r","s","t",
  "u","v","w","x","y","z","*","&","$","#","!","?","<",">","+"];
const symbols = characters.slice(52);
const letters = characters.slice(0, 52);

let passwordEl1 = document.getElementById("password-el1");
let passwordEl2 = document.getElementById("password-el2");
let passwordGenerateEl = document.getElementById("password-generate");
let charactersInput = document.getElementById("characters");
let symbolsCheck = document.getElementById("symbols");


function generatePassword() {
  passwordEl1.textContent = "";
  passwordEl2.textContent = "";
  const passwordLength = parseInt(charactersInput.value, 10); // take value from input
  const symbolsValue = symbolsCheck.value;

  // check input field for valid password number
  if (isNaN(passwordLength) || passwordLength <= 0) {
    alert("Type valid length of password")
    return;
  }
  // with symbols
  if (symbolsCheck.checked) {
      for (let i = 0; i < passwordLength; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);
        passwordEl1.textContent += characters[randomIndex1];
        passwordEl2.textContent += characters[randomIndex2];
      }
  // without symbols
  } else {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex1 = Math.floor(Math.random() * letters.length);
      let randomIndex2 = Math.floor(Math.random() * letters.length);
      passwordEl1.textContent += letters[randomIndex1];
      passwordEl2.textContent += letters[randomIndex2];
    }
  }

  }
passwordGenerateEl.addEventListener("click", generatePassword);
