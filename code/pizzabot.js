const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;
//let orderQuantity;

//Put your Javscript code here:

/*Print the variables*/
console.log(vegetarian); 
console.log(hawaiian);
console.log(pepperoni);  


/*Functions*/

/*Check if the pizza is on the menu*/ 
const validatePizzaName = (orderName = "defaultPizza") => {
    console.log("Validate pizza name");
    console.log(orderName);
    if(orderName ==="Vegetarian Pizza"){
        return true;
    }
    else if(orderName ==="Hawaiian Pizza"){
        return true;
    }
    else if(orderName ==="Pepperoni Pizza"){
        return true;
    }
    else return false;   
} 

/*Total cost function*/ 
const calculateTotalCost = (orderQuantity,pizzaPrice) =>{
    let total = orderQuantity * pizzaPrice;
    return total;
}

/*Cooking time function */
const calculateCookingTime = (orderQuantity) =>{
    let cookingTime = 0;
    if(orderQuantity <= 2 && orderQuantity > 0){
        cookingTime = 10;
    }
    else if(orderQuantity > 2 && orderQuantity <= 5)
    {
        cookingTime = 15;
    }
    else {
        cookingTime = 20;
    }
    return cookingTime;
}



/* PGM START 

Greet customer*/
alert(`Hey! Happy to serve your pizza. On our meny we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

/*Ask what the customer wants*/ 
    
let orderName = prompt("What pizza do you want?");

if(validatePizzaName(orderName) == true)
{
    orderQuantity = prompt(`Okay, how many pizzas do you want?`);

    //Calculate the total cost
    orderTotal = calculateTotalCost(orderQuantity,pizzaPrice);
    //const orderTotal = orderQuantity * pizzaPrice;
    totalCookingTime = calculateCookingTime(orderQuantity);
    
    //Summarize order
    let orderInfo = (`<h2>Great, I'll let started on you ${orderName} right away, and it'll cost you ${orderTotal} kr.\n The pizzas will take ${totalCookingTime} minutes</h2> `);
    
    //Put order info in the html-doc
    document.getElementById("pizza-d").innerHTML = orderInfo;
    
 

}
else alert("Pick a pizza from the menu");



