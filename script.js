console.log('Hello World');

//employee data array
let employeeData = [];

function readyNow(){
    console.log('DOM IS READY!!');
}

//creating my form submit button -adding employees to the DOM
function onSubmit(event){
//preventing the webpages default behavior
    event.preventDefault();

 //grabbing the user's input elements by id(or value attribute. -found in the html form-)
    const firNameElement = document.getElementById("first-name-input");
    const lastNameElement = document.getElementById("last-name-input");
    const idElement = document.getElementById("id-input");
    const titleElement = document.getElementById("title-input");
    const salaryElement = document.getElementById("salary-input");

//array/object setup for user's inputs
 let userInput = {
        fName: firNameElement.value,
        lName: lastNameElement.value,
        id: idElement.value,
        title: titleElement.value,
        salary: Number(salaryElement.value),
    };

//pushing objects to the global array
 employeeData.push(userInput);

//updating the table with form responses
const tableList = document.getElementById("table-data");

tableList.innerHTML += `<tr>
              <td>${firNameElement.value}</td>
              <td>${lastNameElement.value}</td>
              <td>${idElement.value}</td>
              <td>${titleElement.value}</td>
              <td>$${salaryElement.value}</td>
              <td><button onclick="deleteButton(event)">Delete</button></td>
              </tr>`;


 //clearing the form fields
 firNameElement.value = "";
 lastNameElement.value = "";
 idElement.value = "";
 titleElement.value = "";
 salaryElement.value = "";

 console.log(`employee array: ${employeeData}`);

 renderMonthlyCost();
}

//function to delete the employees if need be...ya FIRED!
function deleteButton(event){
    event.target.closest("tr").remove();

//updating the monthly cost

}

//adding up all of the salaries to get our monthly cost
function addMonthlyCost(){
    let total = 0;
    for (const userInput of employeeData){
        console.log(userInput);
        total += Number(userInput.salary);
    }
    return total;
}

function renderMonthlyCost(){
    const monthlyTotal = addMonthlyCost();
    const moneyElement = document.getElementById("cost");
    if(monthlyTotal >= 20000){
        console.log("SHOULD BE RED");
        
    }
    moneyElement.innerHTML = `Total monthly cost: $${monthlyTotal}`;

}
// function render(){
//     //linking inputs to my js file
//     const formList = document.getElementById("form");

//     formList.innterHTML = '';

//     console.log(formList);

//     //Looping overthe array and appending inputted info the the dom
//     for(let i = 0; i<employeeData.length; i++){
//         formList.innerHTML += `<tr>
//               <td>${employeeData[i].fName}</td>
//               <td>${employeeData[i].lName}</td>
//               <td>${employeeData[i].id}</td>
//               <td>${employeeData[i].title}</td>
//               <td>$${employeeData[i].salary}</td>
//               <td><button>Delete</button></td>
//               </tr>`
//     }
// }