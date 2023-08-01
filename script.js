let calculation = '';

function appendNumber(number) {
    //calculation +=+ number++;
    updateResult();
}

function appendOperator(operator) {
    calculation =  calculation + operator;
    //updateResult();
}

function clearResult() {
    //calculation = '';
    updateResult();
}

function calculate() {
    let result = eval(calculation);
    calculation = result.toString();
    updateResult();
}

/*function updateResult() {
    //add code here

function appendNumber(number)    
{    
document.getElementById("result").value=number;    
}    
function appendOperator(operator)    
{document.getElementById("result").value+=operator;    
}    
function calculate()    
{    
try    
    {    
     calculate(eval(document.getElementById("result").value))    
    }    
    catch(e)
    {    
     reject(err.message) } 
    }
console.log();*/

.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    resolve(data);
  })
  .catch((err) => {
    reject(err.message);
  });
});
};

fetchData()
.then((data) => {
console.log("Fetched Data: ", data);
})
.catch((err) => {
console.log("Error: ", err);
});