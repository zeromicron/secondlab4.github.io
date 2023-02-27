const cars = ["toyota supra a80", "honda nsx", "mazda rx7", "nissan gtr"];

let text = "";
for (let i = 0; i < cars.length; i++) {
text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

let myText = 'I am a string';
let newString = myText.replace('string', 'student');
console.log(newString);

function returnobject() {
  for (let mebe = 1; ; mebe++) {
    console.log(mebe + "A");
      if (mebe == 5) {
        return;
      }
      console.log(mebe + "B");
    }
}

returnobject();

    var i = 1;
      setInterval(function() {
        document.getElementById("myImage").src = "image" + i + ".jpg";
        i++;
        if (i == 5) {
          i = 1;
        }
      }, 1000);

function createPerson(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    sayHello: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old, and i can check your word to polindrome.`);
    }
  };
}

const Zangar = createPerson("Zangar", "Zhunisbek", 18);
Zangar.sayHello();
function checkPalindrome() {
  const str = prompt('Enter a word or phrase for palindrom checking:');
  const reversed = str.split('').reverse().join('');
  if (str === reversed) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

checkPalindrome();
