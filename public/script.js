const API = "/students";

let studentsData = [];

function loadStudents(){

fetch(API)

.then(res => res.json())

.then(data => {

studentsData = data;

document.getElementById(
"studentCount"
).innerText = data.length;

const table =
document.getElementById("studentTable");

table.innerHTML = "";

if(data.length === 0){

table.innerHTML = `
<tr>
<td colspan="5" class="empty">
No Students Found
</td>
</tr>
`;

return;
}

data.forEach(student => {

table.innerHTML += `
<tr>

<td>${student.id}</td>

<td>${student.name}</td>

<td>${student.email}</td>

<td>${student.course}</td>

<td>

<button
class="delete-btn"
onclick="deleteStudent(${student.id})">

Delete

</button>

</td>

</tr>
`;

});

});

}

function addStudent(){

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const course =
document.getElementById("course").value;

if(!name || !email || !course){

alert("Fill all fields");

return;
}

fetch(API,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
course
})

})

.then(res=>res.json())

.then(data=>{

alert(data.message);

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("course").value="";

loadStudents();

});

}

function deleteStudent(id){

if(confirm(
"Are you sure you want to delete?"
)){

fetch(`${API}/${id}`,{
method:"DELETE"
})

.then(res=>res.json())

.then(data=>{

alert(data.message);

loadStudents();

});

}

}

function searchStudent(){

let keyword =
document.getElementById(
"searchInput"
).value.toLowerCase();

let rows =
document.querySelectorAll(
"#studentTable tr"
);

rows.forEach(row=>{

let text =
row.innerText.toLowerCase();

row.style.display =
text.includes(keyword)
? ""
: "none";

});

}

loadStudents();