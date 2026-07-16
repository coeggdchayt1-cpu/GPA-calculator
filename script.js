function generateSemesters(){

let count = document.getElementById("semesterCount").value;

let container = document.getElementById("semesterContainer");

container.innerHTML = "";


for(let i=1; i<=count; i++){

let semester = document.createElement("div");

semester.className="card";


semester.innerHTML = `

<h2>Semester ${i}</h2>

<p>
Course details will appear here.
</p>

`;

container.appendChild(semester);

}

}
