const length = 12;
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "1234567890";
const symbol = "!@#$%^&&*()_+|:{}?><";
const passwordBox = document.getElementById("password");
const everything = upperCase + lowerCase + numbers + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; // Using lowerCase.length
  password += numbers[Math.floor(Math.random() * numbers.length)]; // Using numbers.length
  password += symbol[Math.floor(Math.random() * symbol.length)]; // Using symbol.length
  
  while (length > password.length) {
    password += everything[Math.floor(Math.random() * everything.length)];
  }
  
  passwordBox.value = password;
}



function copyPassword() {
    const password = passwordBox.value;
    
    if (!navigator.clipboard) {
      // Clipboard API not supported
      alert("Copying to clipboard is not supported in this browser.");
      return;
    }
    
    navigator.clipboard.writeText(password)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
        // Handle error
      });
    }
