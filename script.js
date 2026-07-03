//CryptoJS library
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js";
document.head.appendChild(script);


//Slider values
const lengthValue = document.getElementById('lennumber');

//Password Strings
const alpets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  ;
const nums = "1234567890";
const symbols = "!@#$%^&*()_+-=[]{};':?></.,*-+`~";

const allChars = alpets + nums + symbols;

//Password Generator
function createpwd() {
    let password = "";
    const length = parseInt(lengthValue.value);

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    document.getElementById("pwd").value = password;
}

//Encryption
function encryptAesPassword() 
{
       // Function to encrypt the password using AES
        const password = document.getElementById('pwd').value;
        const key = CryptoJS.enc.Utf8.parse('hghzxmefdhf@wqfrgfehgf==');
        const encrypted = CryptoJS.AES.encrypt(password, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        document.getElementById('encryptedaesPassword').value = encrypted.toString();

    }
 function encryptDesPassword(){
    // Function to encrypt the password using DES
        const password = document.getElementById('pwd').value;
        const key = CryptoJS.enc.Utf8.parse('hghzxmefdhf@wqfrgfehgf==');
        const encrypted = CryptoJS.DES.encrypt(password, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        document.getElementById('encrypteddesPassword').value = encrypted.toString();
    }

    function encryptShaPassword() {
        const password = document.getElementById('pwd').value;
        const hash = CryptoJS.SHA256(password);
        document.getElementById('encryptedshaPassword').value = hash.toString(CryptoJS.enc.Hex);
    }
    
    

    // Function to encrypt the password using Caesar Cipher
    function encryptCaesarPassword(){
        const password = document.getElementById('pwd').value;
        const shift = 3; // You can change this shift value as needed
        const encrypted = caesarCipher(password, shift);
        document.getElementById('encryptedCaesarPassword').value = encrypted;
    }
//Caesar Cipher Function
function caesarCipher(str, shift) {
    return str.replace(/[A-Za-z]/g, function (c) {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65); // Uppercase letters
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97); // Lowercase letters
        }
        return c; // Non-alphabetic characters remain unchanged
    });
}

