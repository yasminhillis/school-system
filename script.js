var classes = ['Business','Computer Science','English','Family and Consumer Science','Foreign Language',
'Math','Performing Arts','Physical Education','Science', 'Social Studies']

var idGenerator = makeCounter()

$('#student-class-div').one('click',function(){
  $('#student-class').append('<button id="view">add a class</button>')
 $('#student-class').append('<button id="remove">remove a class</button>')
 $('#view').one('click',function(){
   $('#classes').append('<input type="text" id="inp"><button id="add">add</button>')
   $('#add').click(function(){
       classes.unshift($('#inp').val())
       for(var i=0; i<classes.length; i++){
        $('#classes').append(`<tr><td>${classes[i]}</td></tr>`)
       }
   })
 })
})

$('#hide').click(function(){
  $('.wrap').hide()
})

$('#show').click(function(){
  $('.wrap').show()
})

// function student(name, dob, studentClass, studentGPA){
//   return {
//     name: name,
//     dob: dob,
//     studentClass: studentClass,
//     studentGPA: studentGPA
//   }
// }

// var student1 = student('Riham', '2/3/2010', '5th', 3.4)
// var student2 = student('Ibtisam', '10/11/2010', '5th', 4.0)
// var student3 = student('Rida', '6/12/2010', '5th', 3.4)
// var student4 = student('Reem', '2/3/2010', '5th', 3.7)



function displayStudent(student){
  alert('name:' + student.name+ ' class: ' + student.class)
}

var studentArr = []

function displayClass(studentClass){
  for(var i=0; i<studentClass.length; i++){
    alert(i+1 + '. '+ studentClass[i].name + ' GPA ' + studentClass[i].studentGPA)
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

var student = {
  name,
  id: idGenerator()
}
// 
// $('#students-div').one('click',function(){
//
//   $('#students-div').append('<input type="text" id="input-task">')
//   var text = $('#input-task').val();
//   $('#students').append(`<li>${text}</li>`)
// })



$('a').click(function(e){
  e.preventDefault()
  console.log('jiii');
})

function makeCounter(){
  var count = 0;
  return function(){
    var t = count;
    count = count + 1;
    return t;
  }
}
