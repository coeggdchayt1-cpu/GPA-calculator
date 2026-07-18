function downloadPDF() {

const { jsPDF } = window.jspdf;

const doc = new jsPDF("p", "mm", "a4");


// Student Information

let name = document.getElementById("studentName").value;
let father = document.getElementById("fatherName").value;
let roll = document.getElementById("rollNo").value;
let reg = document.getElementById("registrationNo").value;
let dept = document.getElementById("department").value;
let session = document.getElementById("session").value;

let semester = document.getElementById("semesterCount").options[
document.getElementById("semesterCount").selectedIndex
].text;



// HEADER

doc.setFont("helvetica","bold");

doc.setFontSize(16);

doc.text(
"Government Girls Degree College No.1 Hayatabad",
105,
15,
{align:"center"}
);


doc.setFontSize(12);

doc.text(
"Hayatabad, Peshawar",
105,
22,
{align:"center"}
);


doc.text(
"Affiliated with Shaheed Benazir Bhutto Women University",
105,
29,
{align:"center"}
);


doc.setFontSize(15);

doc.text(
"STUDENT TRANSCRIPT",
105,
40,
{align:"center"}
);



// STUDENT INFORMATION

doc.setFontSize(11);

doc.text(
"Student Information",
14,
52
);


doc.setFont("helvetica","normal");


doc.text(`Student Name: ${name}`,14,60);

doc.text(`Roll No: ${roll}`,120,60);


doc.text(`Father Name: ${father}`,14,68);

doc.text(`Registration No: ${reg}`,120,68);


doc.text(`Department: ${dept}`,14,76);

doc.text(`Session: ${session}`,120,76);


doc.text(`Programme: BS`,14,84);

doc.text(`Current Semester: ${semester}`,120,84);



doc.line(14,90,196,90);



// ===============================
// SEMESTERS
// ===============================


let yPosition = 100;


let semesters = document.querySelectorAll("#semesterContainer .card");



semesters.forEach(function(semesterCard,index){



if(yPosition > 250){

doc.addPage();

yPosition = 20;

}



doc.setFont("helvetica","bold");

doc.setFontSize(12);


doc.text(
`${index+1} Semester`,
14,
yPosition
);



let rows = semesterCard.querySelectorAll("table tr");

let tableData = [];



rows.forEach(function(row,rowIndex){


if(rowIndex===0) return;


let cells = row.querySelectorAll("td");


if(cells.length>0){


tableData.push([

cells[0].querySelector("input").value,

cells[1].querySelector("input").value,

cells[2].querySelector("input").value,

cells[3].innerText,

cells[4].innerText,

cells[5].querySelector("input").value,

cells[6].innerText

]);


}


});



doc.autoTable({

startY:yPosition+5,

head:[

[
"Course Code",
"Course Title",
"Marks %",
"Grade",
"Value",
"CH",
"Grade Points"
]

],

body:tableData,

theme:"grid",

styles:{
fontSize:8
}


});



yPosition = doc.lastAutoTable.finalY + 8;



let sgpa = semesterCard.querySelector(".sgpa");


if(sgpa){


doc.setFontSize(10);


doc.text(
`SGPA: ${sgpa.innerText}`,
14,
yPosition
);


}


yPosition += 15;



});




// ===============================
// FINAL CGPA SUMMARY
// ===============================


if(yPosition > 240){

doc.addPage();

yPosition=25;

}


doc.line(14,yPosition,196,yPosition);


yPosition += 10;


doc.setFont("helvetica","bold");

doc.setFontSize(13);


doc.text(
"CUMULATIVE ACADEMIC RECORD",
14,
yPosition
);


yPosition += 10;


doc.setFont("helvetica","normal");

doc.setFontSize(11);



let totalCH = document.getElementById("cgpaCH").innerText;

let totalGP = document.getElementById("cgpaGP").innerText;

let cgpa = document.getElementById("cgpa").innerText;

let overallGrade = document.getElementById("overallGrade").innerText;

let standing = document.getElementById("academicStanding").innerText;



doc.text(
`Total Credit Hours: ${totalCH}`,
14,
yPosition
);


yPosition += 7;


doc.text(
`Total Grade Points: ${totalGP}`,
14,
yPosition
);


yPosition += 7;


doc.text(
`CGPA: ${cgpa}`,
14,
yPosition
);


yPosition += 7;


doc.text(
`Overall Grade: ${overallGrade}`,
14,
yPosition
);


yPosition += 7;


doc.text(
`Academic Standing: ${standing}`,
14,
yPosition
);




// FOOTER


doc.setFont("helvetica","italic");

doc.setFontSize(9);


doc.text(
"This is a student-generated transcript.",
14,
285
);



// SAVE


doc.save(`${name || "Student"}_Transcript.pdf`);


}


doc.setFont("helvetica","bold");

doc.setFontSize(12);


doc.text(
`${index+1} Semester`,
14,
yPosition
);



let rows = semesterCard.querySelectorAll("table tr");


let tableData = [];



rows.forEach(function(row,rowIndex){


if(rowIndex === 0) return;


let cells = row.querySelectorAll("td");


if(cells.length > 0){


tableData.push([


cells[0].querySelector("input").value,

cells[1].querySelector("input").value,

cells[2].querySelector("input").value,

cells[3].innerText,

cells[4].innerText,

cells[5].querySelector("input").value,

cells[6].innerText


]);


}


});



doc.autoTable({


startY:yPosition+5,


head:[

[
"Course Code",
"Course Title",
"Marks %",
"Grade",
"Value",
"CH",
"Grade Points"
]

],


body:tableData,


theme:"grid",


styles:{

fontSize:8

}


});



yPosition = doc.lastAutoTable.finalY + 8;



let sgpa = semesterCard.querySelector(".sgpa");


if(sgpa){


doc.setFontSize(10);


doc.text(

`SGPA: ${sgpa.innerText}`,

14,

yPosition

);


}


yPosition += 15;


});





// ===============================
// CGPA SUMMARY (ONLY ONCE)
// ===============================


if(yPosition > 240){

doc.addPage();

yPosition = 25;

}



doc.line(14,yPosition,196,yPosition);


yPosition += 10;


doc.setFont("helvetica","bold");

doc.setFontSize(13);


doc.text(
"CUMULATIVE ACADEMIC RECORD",
14,
yPosition
);



yPosition += 10;


doc.setFont("helvetica","normal");

doc.setFontSize(11);



let totalCH = document.getElementById("cgpaCH").innerText;

let totalGP = document.getElementById("cgpaGP").innerText;

let cgpa = document.getElementById("cgpa").innerText;

let overallGrade = document.getElementById("overallGrade").innerText;

let standing = document.getElementById("academicStanding").innerText;



doc.text(
`Total Credit Hours: ${totalCH}`,
14,
yPosition
);


yPosition += 7;


doc.text(
`Total Grade Points: ${totalGP}`,
14,
yPosition
);


yPosition += 7;


doc.text(
`CGPA: ${cgpa}`,
14,
yPosition
);


yPosition += 7;


doc.text(
`Overall Grade: ${overallGrade}`,
14,
yPosition
);


yPosition += 7;


doc.text(
`Academic Standing: ${standing}`,
14,
yPosition
);




// Footer


