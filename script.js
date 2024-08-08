// Task 1: Create variable called 'storeName' and set it to "CSH Store". Console log "Welcome to [storeName]"
let storeName = "CSH Store"
console.log("Welcome to", storeName)

// Task 2: Create a user object with properties 'username' (any), 'password' (any), and 'status' (online or offline). 
let user = {
  userName: "ConanGray98",
  password: "LonelyDancers0209",
  status: "online"
}



// Task 3: Console log "[username] is [status]".
console.log(user.userName, "is", user.status)

// Task 4: Prompt the user to enter their password and save it in a variable called passwordGuess
let user2 = prompt("Enter your password:")
let passwordGuess = user2
// Task 5: If passwordGuess is equal to the password, console log "Welcome [username]" and change status to "online". Else, console log "Wrong password" and change status to "offline"
if (passwordGuess === user.password){
  console.log("Welcome", user.userName)
} else{
  console.log("Wrong password")
  user.status = "Offline"
}


// Task 6: Create an object called hoodieInventory with the properties 'name' ("hoodie"), 'quantity' (any number), and 'price' (any number). 
let hoodieInventory = {
  name : "Hoodie",
  quantity : "57", 
  price : 45
}



// Task 7: Console log "[name] costs [price]"
console.log(hoodieInventory.name, "costs", hoodieInventory.price)

// Task 8: You just sold a hoodie! Change the quantity to be smaller. Console log "[quantity] [name] left in inventory." Confirm that the number changed!
hoodieInventory.quantity-=1
console.log(hoodieInventory.quantity, hoodieInventory.name, "left in inventory")


// Extra credit: Change task 5 such that if the user guesses the password wrong, it keeps prompting them until they guess correctly!

