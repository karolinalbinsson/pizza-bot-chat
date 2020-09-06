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


/*Get the elements of the form*/
const createOrder = () =>{
    console.log("Create order function");
    let customerName = document.getElementById("user-name").value;
    let pizzaName = document.getElementById("pizza-select").value;
    let orderQuantity = document.getElementById("pizza-slider").value;

  
        //No need for validation on pizza name, its in the selectlist
        //validatePizzaName(pizzaName);
        if(orderQuantity>1)
        {
            pizzaName += "s";
        }
        let orderTotal = calculateTotalCost(orderQuantity,pizzaPrice);
        let orderInfo = calculateCookingTime(orderQuantity);

        //Summarize order
     let orderSummary = (`Okay ${customerName}, I'll let started on you ${pizzaName} right away, and it'll cost you ${orderTotal} kr.\n The order will take ${orderInfo} minutes.`);
    
    //Put order info in the html-doc
    document.getElementById("order-confirmation").innerHTML = orderSummary;
    
return false;
}


/*
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

*/

