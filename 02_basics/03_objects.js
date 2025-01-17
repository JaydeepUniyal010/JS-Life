// singleton
// Object.create

// object literals

const mySym = Symbol("key1") //declare symbol


const JsUser = { //
    name: "jaydeep",
    "full name": "happy Jaydeep", //
    [mySym]: "mykey1", //symbol use a key and put square brackets
    age: 18,
    location: "Dehradun",
    email: "happy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //object access 1st but not good way
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // never access with . or (jsuser.fullname)
// console.log(JsUser[mySym])

JsUser.email = "happy@chatgpt.com" //change the object value
// Object.freeze(JsUser)              // freeze ===> not changes after this
JsUser.email = "happy@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){ // 
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this ===> for same object refrence
}

console.log(JsUser.greeting()); //
console.log(JsUser.greetingTwo()); //
