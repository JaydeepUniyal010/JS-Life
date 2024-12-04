const accountId = 144559
let accountEmail = "Learner@gmail.com"
var accountPassword = "12345"
accountCity ="Dehradun"
let accountState;

//accountId =2; //Not allowed 

accountEmail = "abc@gamil.com"
accountPassword = "456456"
accountCity = "Banglore"

console.log(accountId);

/* prefer not  to use  var 
because of issue on block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
