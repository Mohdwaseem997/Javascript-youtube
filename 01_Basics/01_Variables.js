const accountId = 123456
let accountEmail = "user@example.com"
var accountPassword = "password123"
accountCity = "New York"
let accountState;

// accountId = 654321 // changes like this will throw an error because accountId is a constant

 accountEmail = "newuser@example.com"
 accountPassword = "newpassword456"
 accountCity = "Los Angeles"

//  perfer not to use var because it is function scoped and can lead to unexpected behavior.
//  We should use let and const instead because they are block scoped and provide better control over variable scope.
//  variables without a unassigned value will be undefined by default. For example, accountState is declared but not assigned a value, so it will be undefined.
 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])