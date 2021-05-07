function firstNameCheck()
{
    var myName = document.getElementById("fname");
    var letters = /^[A-Za-z]+$/;
    if (myName.value.match(letters))
    {
        return true;
    }
    else
    {
        alert("First name must contain letters only");
        return false;
    }
}

function lastNameCheck()
{
    var myName = document.getElementById("lname");
    var letters = /^[A-Za-z]+$/;
    if(myName.value.match(letters))
    {
        return true;
    }
    else
    {
        alert("Last name must contain letters only");
        return false;
    }
}

function uNameCheck()
{
    var uName = document.getElementById("uname");
    if (uName.value.length < 6 || uName.value.length > 20)
    {
        alert("Username must be at least 6 characters & not exceed 20 characters");
    }
}

function passwordCheck()
{
    var pWord = document.getElementById("psswd");
    var nums = /^(?=.*\d).{8,20}$/;
    if(pWord.value.match(nums))
    {
        return true;
    }
    else
    {
        alert("Password must be at least 8 characters, not exceed 20 characters, and contain at least one number");
    }
}