//caching body tag to change the background style property.
const body = document.getElementById("body");
//caching the button tag.
const button = document.getElementById("random");
//caching the p element to display the value that will be passed to the body.
const propertyValue = document.getElementById("propertyValue");

//caching first input of type color.
const color1 = document.querySelector("#color1");
//caching second input of type color.
const color2 = document.querySelector("#color2");
//caching the p element to display the value the has been passed to the background property of body element.
const inputcolors = document.querySelector("#showcolors");

//Function to generate a random color block times two!
const generateImage = () => {
  const direction = Math.round(Math.random() * 360); //To output a volue between 0 and 360 in degrees to be given to the linear-gradient.

  const r1 = Math.round(Math.random() * 255); // Math.random() outputs a numer between 0(inclusive) & 1(exclusive) with around 17 decimal digits.
  const g1 = Math.round(Math.random() * 255); // We take this number and multiply it by 255. This number can never go above 255.
  const b1 = Math.round(Math.random() * 255); // We have a decimal number with we make an integer with Math.round() which rounds off the previous output.
  // to add random transparency to the image;         // This output is a whole number between 0 & 255 and can be assigned as values for the rgba() property.
  const a1 = Math.round(Math.random() * 10) / 10; //  *** for alpha values we need between 0 & 1 so we multiply the random number with 10 so as to get a value X.xxxxx, round it off so as to X and then                                                                divide it by 10 to get a decimal number or 1. ***  //

  const r2 = Math.round(Math.random() * 255);
  const g2 = Math.round(Math.random() * 255);
  
  const b2 = Math.round(Math.random() * 255);
  // to add random transparency to the image;
  const a2 = Math.round(Math.random() * 10) / 10;

  //Giving values to the linear gradiant.
  const background = body.style.background = `linear-gradient(${direction}deg, rgba(${r1},${g1},${b1},${a1}), rgba(${r2},${g2},${b2},${a2}))`;
  //Displaying the passing values.
  propertyValue.textContent = `${background};`;
}
// Gradient Function
const setGradient = () => {
  //Setting background to the selected style.
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  //Displaying the value passed.
  inputcolors.textContent = body.style.background + ";";
}
//Adding Event Listener to the button.
button.addEventListener("click", generateImage);
//Adding Event Listener to first input of type color.
color1.addEventListener("input", setGradient);
//Adding Event Listener to second input of type color.
color2.addEventListener("input", setGradient);
