const accountId = 144656
let accountEmail ="bhagyashree@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//if you only declare and don't give any value to the accountState then js take it as an undefined value


//accountId = 2 // not allowed
accountEmail ="hcf@gg.com"
accountPassword = "213456"
accountCity="Delhi"

console.log(accountId);

 /* prefer not to use var because of issue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword,accountCity, accountState])




