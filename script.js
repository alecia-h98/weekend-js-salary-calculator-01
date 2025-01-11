console.log('Hello World');

//employee data array
let employeeData = [];

function readyNow(){
    console.log('DOM IS READY!!');
}

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

 employeeData.push(userInput);

 console.log(employeeData);
}