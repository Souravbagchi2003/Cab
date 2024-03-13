function seterror(id, error) {
    //sets  error inside tag of id
    elelment = document.getElementById(id)
    elelment.getElementsByClassName("formerror")[0].innerHTML = error
    // let a = document.getElementsByClassName("formerror")
    // a.classList.add("formerrorcolor")

}

function validateForm() {
    // let returnval = true

    let correct = /^[A-Za-z]+$/

    //perform validation and if validation fails, set the value of returnval to false
    let name = document.forms["myForm"]["fname"].value
    if (name.length == 0) {
        document.getElementById("aa").style.borderColor = "red"
        seterror("name", "  *name must have alphabate")
        // console.log(name)
        // returnval = false
        return false
    }
    if (name.length < 5) {
        document.getElementById("aa").style.borderColor = "red"
        seterror("name", "  *Length of name is too short")
        return false
    }
    if (name.match(correct))
        true
    else {
        document.getElementById("aa").style.borderColor = "red"
        seterror("name", "  *name must have alphabate not number")
        return false
    }

    let email = document.forms["myForm"]["femail"].value
    if (email.length > 15) {
        seterror("email", "Length of email is too long")
        console.log(name)
        return false
    }
    let phone = document.forms["myForm"]["fphone"].value
    if (phone.length != 10) {
        document.getElementById("fphone").style.borderColor = "red"
        seterror("phone", "*check your number number")
        console.log(name)
        return false
    }
    let password = document.forms["myForm"]["fpass"].value
    if (password.length < 5) {
        seterror("pass", "*not sequre")
        console.log(name)
        return false
    }
    let cpassword = document.forms["myForm"]["fcpass"].value
    if (cpassword != password) {
        seterror("cpass", "*not matched!")
        console.log(name)
        return false
    }

}