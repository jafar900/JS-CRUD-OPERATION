const form = document.getElementById('form');
const tbody = document.getElementById('tbody');

const employees = []

function addEmployee(employee) {

    for (let i = 0; i < employees.length; i++) {
        let e = employees[i]
        if (e.email === employee.email) {
            alert("Email alredy exits")
            return;
        }
        else if (e.empid === employee.empid) {
            alert("empid is alredy exits")
            return;
        }
    }


    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${employee.name}</td>
    <td>${employee.email}</td>
    <td>${employee.empid}</td>
    <td>${employee.company}</td>
    <td>${employee.designation}</td>
    <td>
         <button onclick="deleteEmployee(this)" data-empid="${employee.empid}"> Delete </button>
         <button onclick="updateEmployee(this) data-empid="${employee.empid}">Edit</button>
    </td>
    `
    tbody.appendChild(tr)
    employees.push(employee)
    form.reset();
}

function updateEmployee(editRef){
    

}


function deleteEmployee(buttonRef){
    let empId=buttonRef.getAttribute("data-empid");
     //remove element in array of employees
    for(let i=0; i<=employees.length;i++){
        if(employees[i].empid === empId){
            employees.splice(i,1);
            break;
        }
    }
    //remove elememt in DOM tree
    let parentTd=buttonRef.parentNode;
    let parentTr=parentTd.parentNode

    parentTr.remove();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let employee = {
        name: event.target.name.value,
        email: event.target.email.value,
        empid: event.target.empId.value,
        company: event.target.Company.value,
        designation: event.target.designation.value,
    }
    console.log(employee)
    addEmployee(employee)

})