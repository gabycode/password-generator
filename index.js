let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4") 

let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+']

let result = ""
let randomValues = 0


function getValues() {
  for ( let i = 0; i < 9; i++ ) {
    randomValues = Math.floor(Math.random() * characters.length)
    result += characters[randomValues]
   }
  return result += randomValues
}

function getPassword() {
  result = ""
  password1.textContent = getValues()
  result = ""
  password2.textContent = getValues()
  result = ""
  password3.textContent = getValues()
  result = ""
  password4.textContent = getValues()
}
