//JavaScript Login Details

function addEvents() {
    document.getElementById('btnSubmit').addEventListener("click", Submit, false);
    //localStorage.clear();
}

function Submit() {
    var userName = document.getElementById("userName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var pass = document.getElementById("pass").value;
    var confirmPass = document.getElementById("confirmPass").value;
    
    var store = {
        "userName": userName,
        "emailAddress": emailAddress,
        "pass": pass,
        "confirmPass": confirmPass,
    };
    
    //localStorage.setItem(key, JSON.stringify(store));
    localStorage.setItem(userName, JSON.stringify(store));

    //return true;

