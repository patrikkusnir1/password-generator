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

  // check input field for valid password number
  if (isNaN(passwordLength) || passwordLength <= 0) {
    alert("Type valid length of password");
    return;
  }

  // Loop twice to generate two passwords
  for (let i = 0; i < 2; i++) {
    let passwordArray = [];

    if (symbolsCheck.checked) {
      // add one guaranteed symbol
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      passwordArray.push(randomSymbol);

      // fill the rest with with random characters
      while (passwordArray.length < passwordLength) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomChar = characters[randomIndex];

        passwordArray.push(randomChar);
      }
    } else {
      while (passwordArray.length < passwordLength) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomChar = letters[randomIndex];
        passwordArray.push(randomChar);
      }
    }
    // shuffle so the symbol isn’t always first (when symbols are on)
    passwordArray.sort(() => Math.random() - 0.5);

    // assign result to correct element
    if (i === 0) {
      passwordEl1.textContent = passwordArray.join("");
    } else {
      passwordEl2.textContent = passwordArray.join("");
    }
  }
}
passwordGenerateEl.addEventListener("click", generatePassword);
