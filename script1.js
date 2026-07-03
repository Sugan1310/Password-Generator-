document.getElementById('password').addEventListener('input', function () {
        let password = this.value;
        let strengthBar = document.getElementById('strength-bar');
        let strengthText = document.getElementById('strength-text');
    
        let strength = 0;
    
        if (password.length >= 8) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^A-Za-z0-9]/)) strength++;
    
        if (strength === 0) {
            strengthBar.style.width = "0%";
            strengthBar.style.background = "transparent";
            strengthText.innerHTML = "Enter a password to check strength";
        } else if (strength <= 2) {
            strengthBar.style.width = "30%";
            strengthBar.style.background = "red";
            strengthText.innerHTML = "Weak Password 😞";
        } else if (strength <= 4) {
            strengthBar.style.width = "60%";
            strengthBar.style.background = "orange";
            strengthText.innerHTML = "Medium Strength 😐";
        } else {
            strengthBar.style.width = "100%";
            strengthBar.style.background = "green";
            strengthText.innerHTML = "Strong Password 💪";
        }
    });