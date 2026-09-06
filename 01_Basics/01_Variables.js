const accountId = 123456
let accountEmail = "user@example.com"
var accountPassword = "password123"
accountCity = "New York"

// accountId = 654321 // changes like this will throw an error because accountId is a constant

 accountEmail = "newuser@example.com"
 accountPassword = "newpassword456"
 accountCity = "Los Angeles"

 /*
 perfer not to use var because it is function scoped and can lead to unexpected behavior.
 */

console.table([accountId, accountEmail, accountPassword, accountCity])