let userid = prompt("Please enter username")
let password = prompt("Please enter password")
authenticate(userid,password)
function authenticate (userid, password){

    if (userid == "admin" && password == "secret"){
    console.log("Welcome admin!")
}


};