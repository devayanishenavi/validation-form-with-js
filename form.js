function validateForm() {
    var fname = document.forms["myForm"]["fname"].value.trim();
    var email = document.forms["myForm"]["email"].value.trim();
    var course = document.forms["myForm"]["course"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var phone = document.forms["myForm"]["phone"].value.trim();
    var phoneRegex = /^[0-9]{10}$/;
    var nameRegex = /^[a-zA-Z\s]+$/; 

    if (fname === "") {
        alert("Please enter your name");
        return false;
    } else if (!nameRegex.test(fname)) {
        alert("Name should contain only alphabetic characters");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address");
        return false;
    } else if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }

    if (course === "") {
        alert("Please select a course");
        return false;
    }

    if (!gender) {
        alert("Please select your gender");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number");
        return false;
    } else if (!phone.match(phoneRegex)) {
        alert("Phone Number should be a 10-digit number without letters");
        return false;
    } else if (/\D/.test(phone)) {
        alert("Phone Number should contain numbers only");
        return false;
    }

    alert("Form submitted successfully");
    return true;
}
