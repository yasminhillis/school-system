function student(name, dob, studentClass, studentGPA){
  return {
    name: name,
    dob: dob,
    studentClass: studentClass,
    studentGPA: studentGPA
  }
}

var student1 = student('Riham', '2/3/2010', '5th', 3.4)
var student2 = student('Ibtisam', '10/11/2010', '5th', 4.0)
var student3 = student('Rida', '6/12/2010', '5th', 3.4)
var student4 = student('Reem', '2/3/2010', '5th', 3.7)

function displayStudent(student){
  alert('name:' + student.name+ ' class: ' + student.class)
}

var studentClass = [student1, student2, student3, student4]

function displayClass(studentClass){
  for(var i=0; i<class.length; i++){
    alert(i+1 + '. '+ class[i].name + ' GPA ' + class[i].studentGPA)
  }
}

function addStudent(studentClass, student){
  studentClass.push(student)
}

function removeStudent(studentClass, student){
  var target = studentClass[1].name;
  for(var i=0; i<studentClass.length; i++){
    if(studentClass[i].name === target){
      studentClass.splice(i,1)
    }
  }
}
