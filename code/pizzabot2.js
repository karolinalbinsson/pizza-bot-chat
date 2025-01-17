/*create an array filled with objects of pizzainformation*/
const vegetarian = {
  type: "vegetarian",
  price: 80,
  fullName: "Vegetarian Pizza",
};
const hawaiian = {
  type: "hawaiian",
  price: 80,
  fullName: "Hawaiian Pizza"
};
const pepperoni = {
  type: "pepperoni",
  price: 90,
  fullName: "Pepperoni Pizza"
};
const margerita = {
  type: "margerita",
  price: 90,
  fullName: "Margherita Pizza",
};
const quattro = {
  type: "quattro",
  price: 120,
  fullName: "Quattro Stagione Pizza",
};
//create the array
let pizzas = new Array();

//add the objects to the array
pizzas.push(vegetarian, hawaiian, pepperoni, margerita, quattro);

//How to access the price for a certain pizza
var pizzaIndex = pizzas.indexOf(pepperoni);
var pizzaPrice = pizzas[pizzaIndex].price;

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
  if (orderName === "Vegetarian Pizza") {
    return true;
  } else if (orderName === "Hawaiian Pizza") {
    return true;
  } else if (orderName === "Pepperoni Pizza") {
    return true;
  } else return false;
};

/*Total cost function*/
const calculateTotalCost = (orderQuantity, pizzaName) => {
  console.log("calculateTotalCost");
  console.log("In calculate total cost");
  console.log(pizzaName) + " pizzaName";

  //Access the price from the pizzaArray
  let pizzaPrice = pizzas.find((x) => x.type === pizzaName).price;

  console.log(pizzaPrice + "pizzaPrice of X");

  console.log(pizzaPrice + " first pizzaPice for " + pizzas[pizzaIndex].type);
  let total = orderQuantity * pizzaPrice;
  return total;
};

/*Cooking time function */
const calculateCookingTime = (orderQuantity) => {
  console.log("calculateCOokingTime");
  let cookingTime = 0;
  if (orderQuantity <= 2 && orderQuantity > 0) {
    cookingTime = 10;
  } else if (orderQuantity > 2 && orderQuantity <= 5) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }
  return cookingTime;
};

const printReceipt = (customerName, pizzaName, orderTotal, orderInfo) => {
  console.log("printReceipt");
  //Get the fullname from the pizza object
  let pizzaNameOut = pizzas.find((x) => x.type === pizzaName).fullName;

  return `Receipt for: ${customerName}<br> You have ordered: ${pizzaNameOut} <br>Total Price: ${orderTotal} SEK<br> Estimated cooking time: ${orderInfo} minutes.<br>`;
};

const setPizzaPic = (pizzaName) => {
  console.log("setPizzaPic");
  if (pizzaName.match(/hawaiian.*/)) {
    document.getElementById("pizza-icon").src = "./images/hawaii.jpg";
  } else if (pizzaName.match(/pepperoni.*/)) {
    document.getElementById("pizza-icon").src = "./images/pepperoni.jpg";
  } else if (pizzaName.match(/vegetarian.*/)) {
    document.getElementById("pizza-icon").src = "./images/vegetarian.jpg";
  }
};
/* PGM START 


/*Get the elements of the form*/
const createOrder = (buttonID) => {
  const checkProgressBar = document.getElementById("pizza-progress").value;
  if (checkProgressBar != "3") {
    alert("Hmm, are you sure you've filled in all of your choices?");
    return false;
  } else {
    //call the window function to show/hide the correct div
    nextButtonClicked(buttonID);
    document.getElementById("pizza-progress").value = 4;
    document.getElementById("order-confirmation").style.display = "flex";
    console.log("Create order function");

    let customerName = document.getElementById("user-name").value;
    let pizzaName = document.getElementById("pizza-select").value;
    let orderQuantity = document.getElementById("pizza-slider").value;
    let orderTotal = calculateTotalCost(orderQuantity, pizzaName);
    let orderInfo = calculateCookingTime(orderQuantity);

    //Summarize order
    // let orderSummary = (`Okay ${customerName}, I'll let started on you ${pizzaName} right away, and it'll cost you ${orderTotal} kr.\n The order will take ${orderInfo} minutes.`);
    let orderSummary = printReceipt(
      customerName,
      pizzaName,
      orderTotal,
      orderInfo
    );

    //Put order info in the html-doc
    document.getElementById("order-confirmation-p").innerHTML = orderSummary;

    //Change background picture depending on pizza style
    setPizzaPic(pizzaName);
    setCookingTimer(orderInfo);
  }

  return false;
};

const changeRangeDisplayValue = () => {
  let rangeVal = document.getElementById("pizza-slider").value;
  document.getElementById("output-range").innerHTML = rangeVal;
  checkProgress();
};

const checkProgress = () => {
  console.log("checkProgress");
  let checkObjects = new Array();
  checkObjects[0] = document.getElementById("user-name").value;
  checkObjects[1] = document.getElementById("pizza-select").value;
  checkObjects[2] = document.getElementById("pizza-slider").value;
  // console.log(checkObjects.length);
  let progress = 0;
  let i = 0;
  // console.log(i);

  for (i = 0; i < checkObjects.length; i++) {
    //console.log("i forloopen" + checkObjects[i]);
    if (checkObjects[i] != "" && checkObjects[i] != "0") {
      // console.log("värde i array : " + checkObjects[i]);
      progress++;
    }
    //console.log(progress + "progress efter loopen kört");
  }
  document.getElementById("pizza-progress").setAttribute("value", progress);
};

const setCookingTimer = (cookingTime) => {
  var d1 = new Date();
  var d2 = new Date(d1);
  d2.setMinutes(d1.getMinutes() + cookingTime);

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = d2 - now;

    // Time calculations for days, hours, minutes and seconds
    //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML =
      minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "The pizza is done!";
      document.getElementById("timer-label").innerHTML = "";
    }
  }, 1000);
};

/*Button functions for moving to the next question*/
const nextButtonClicked = (buttonID) => {
  console.log(buttonID + " button clicked");
  if (validateInput(buttonID)) {
    switch (buttonID) {
      case "nameButton": {
        console.log("case is nameButton" + buttonID, typeof buttonID);
        let winToHide = document
          .getElementById("window1")
          .classList.toggle("window-invisible");
        let winToShow = document
          .getElementById("window2")
          .classList.toggle("window-invisible");
        winToShow = document
          .getElementById("window2")
          .classList.toggle("window-visible");
        break;
      }
      case "pizzaButton": {
        console.log("case is pizzaButton" + buttonID);
        let winToHide = document
          .getElementById("window2")
          .classList.toggle("window-invisible");
        let winToShow = document
          .getElementById("window3")
          .classList.toggle("window-invisible");
        winToShow = document
          .getElementById("window3")
          .classList.toggle("window-visible");
        break;
      }
      case "numberButton": {
        console.log("case is numberButton" + buttonID);
        let winToHide = document
          .getElementById("window3")
          .classList.toggle("window-invisible");
        let winToShow = document
          .getElementById("window4")
          .classList.toggle("window-invisible");
        winToShow = document
          .getElementById("window4")
          .classList.toggle("window-visible");
        break;
      }

      case "orderButton": {
        console.log("case is orderButtonButton" + buttonID);
        let winToHide = document
          .getElementById("window4")
          .classList.toggle("window-invisible");
        document.getElementById("window5").classList.toggle("window-invisible");
        document.getElementById("window5").classList.toggle("window-visible");
        //delay the hiding of the GIF and the Showing of the receipt
        setTimeout(function () {
          document
            .getElementById("window5")
            .classList.toggle("window-invisible");
          document.getElementById("window5").classList.toggle("window-visible");

          document
            .getElementById("window6")
            .classList.toggle("window-invisible");
          document.getElementById("window6").classList.toggle("window-visible");
          //Remove the progress bar on finish
          document
            .getElementById("pizza-progress-div")
            .classList.toggle("window-invisible");
        }, 3700);

        break;
      }
    }
    checkProgress();
  } else alert("Oops, fill in a value please :)");
};

const validateInput = (buttonID) => {
  console.log("validateInput") + buttonID;
  let isValid = false;
  let buttonClicked = buttonID;
  switch (buttonClicked) {
    case "nameButton": {
      console.log("is namebuton");
      let inputToValidate = document.getElementById("user-name").value;
      console.log(inputToValidate);
      if (inputToValidate !== "" || inputToValidate.length > 1) {
        console.log("input has value");
        isvalid = true;
        return isvalid;
      }

      break;
    }
    case "pizzaButton": {
      let inputToValidate = document.getElementById("pizza-select").value;
      if (inputToValidate != "") {
        isvalid = true;
        return isvalid;
      }
      break;
    }
    case "numberButton": {
      let inputToValidate = document.getElementById("pizza-slider").value;
      if (inputToValidate != "" && inputToValidate != "0") {
        isvalid = true;
        return isvalid;
      }
      break;
    }
    default:
      return isvalid;
  }
};