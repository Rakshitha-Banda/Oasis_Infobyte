
const input=document.querySelector("#temperature-input");
const degree=document.querySelector("#unit-select");
const result=document.querySelector("#result-display");
let result1;
document.querySelector("#convert-button").addEventListener("click",function()
{
  const input1=input.value;
  const degree1=degree.value;

  if (!input1){
    alert("please enter a temperature");
    return;
  }

  if (isNaN(input1)) {
    alert("please enter valid temperature");
    return;
  }

  if (degree1 === "celsius") {
      result1 = ((input1 - 32) * 5) / 9+"°C";
  } else if (degree1 === "fahrenheit") {
      result1 = (input1 * 9) / 5 + 32+"°F";
  }
  result.innerHTML=result1;
});
