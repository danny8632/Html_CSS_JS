function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "allan" && password == "fisk"){
        window.location = "Success.html";
    }
    else{
        alert("Wong!");
    }
}

