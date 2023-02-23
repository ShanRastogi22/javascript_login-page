
// var dataToGet = [
//     {
//         id : 1,
//         title : "I love to right this functin.",
//         description : "This function is written in Javascript."
//     },
//     {
//         id : 2,
//         title : "I love to think new function in this function language.",
//         description : "This is the user data to get access" 
//     }
// ]

// // This part to take input to the users

// var userName = prompt("Enter your email Id");
// var password = prompt("Enter your Password");

// function Login(user,pass){
//     if(user === userLogIn[0].email && pass === userLogIn[0].password) {
//         console.log(dataToGet)
//     } else {
//         alert("Hey you entered the worng username and password!")
//     }
// }

// function WrongUser(user,pass) {
//     for(var i = 0; i < userLogIn.length; i++){
//         if(userLogIn[i].email === user && userLogIn[i].password === pass) {
//             return true;
//         }
        
//     }
//     return false;
// }

// function Login(user,pass){
//     if(WrongUser(user,pass)){
//         console.log(dataToGet);
//     } else {
//         alert("you entered worng email or password!")
//     }
// }

// Login(userName,password);
// function validate()
// {
//     var username=document.getElementById("username").value;
//     var password=document.getElementById("password").value;
//     // if(username=="admin" && password=="user")
//     // {
//     //     window.location.assign("index.html");
//     //     alert("login succesfully");
//     //     return false;
//     // }else {
//     //     alert("login failed");
//     // }
// }
var userLogIn = [
    {
        id : 1,
        email : "shanrastogi57@gmail.com",
        password : "shan@2345" 
    },
    {
        id : 2,
        email : "ani42000@gmail.com",
        password : "ani@0987",
    },
    {
        id : 3,
        email : "nahs82826@gmail.com",
        password : "nahs@0987"
    }
]
   
function WrongUser() {
var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;
    for(var i = 0; i < userLogIn.length; i++){
        if(userLogIn[i].email === user && userLogIn[i].password === pass) {
            return true;
        }
        
    }
    return false;
}
function Login(user,pass){
    if(WrongUser(user,pass)){
        window.location.assign("index.html");
        alert("login succesfully")
    } else {
        alert("you entered worng email or password!")
    }
}