var nemployee=document.getElementById('nemployee');
var age=document.getElementById('age');
var salary=document.getElementById('salary');
var  dis=document.getElementById('dis');
var addbtn=document.getElementById('addbtn');
var employee=[];
var curent= 0;
var data= document.getElementById('data');
console.log(data);
if(  localStorage.getItem('employeelist')==null)
{ 
  var employee=[];

 }else {
employee =JSON.parse(  localStorage.getItem('employeelist'));
display(); 
}
  addbtn.onclick = function() 
  {if(addbtn.innerHTML='Add employee'){ 
   addemployee ();
  }else{
     updateemployee();
  }
   
  
    display ();
clear();
  }
  function addemployee (){
var employees={
    name:nemployee.value,
    age:age.value,
    salary:salary.value,
   dis:dis.value
}
employee.push(employees);
localStorage.setItem ('employeelist',JSON.stringify (employee));
}
function display (){
var rusult='' ;
for(var i=0;i<employee.length;i++)
{

rusult += `<tr> 
<td>${i}</td> 
 <td>${employee[i].name}</td>
<td>${employee[i].age}</td>
 <td>${employee[i].salary}</td>
<td>${employee[i].dis }</td>
<td>  <button class='update' onclick='update(${i})' > update</button> </td>
<td>  <button class="delete" onclick="del(${i})" >delete</button> </td>
</tr>`;

}

data.innerHTML=rusult;
console.log(employee);
}



function clear(){
  nemployee.value='';
  age.value='';
  salary.value='';
  dis.value='';


}
function del(index){
 employee.splice(index,1);
 localStorage.setItem('employeelist',JSON.stringify(employee));
display();

}
function sear(test){
  var rusult='' ;
  for(var i=0;i<employee.length;i++)
  {
    if(employee[i].name.toLowerCase().includes(test.toLowerCase())){
 
  
    rusult +=
     `<tr> 
    <td>${i}</td> 
     <td>${employee[i].name}</td>
    <td>${employee[i].age}</td>
     <td>${employee[i].salary}</td>
    <td>${employee[i].dis }</td>
    <td>  <button class='update' onclick='update(${i})' > update</button> </td>
    <td>  <button class="delete" onclick="del(${i})" >delete</button> </td>
    </tr>`;
    
    }

console.log(test); 
}

data.innerHTML=rusult;
}

delbtn.onclick = function() 
  {
    localStorage.removeItem('employeelist') ;
    employee=[];
    data.innerHTML='';
  }

  function update(index){ 
console.log(index);
var employ=employee[index];
console.log(employ);


nemployee.value =employ.name;
age .value =employ.age;
salary .value =employ.salary;
dis .value =employ.dis;
addbtn.innerHTML='update employee';
curent=index;

console.log(curent);
  }
  function updateemployee(){ 
console.log(curent);
    var employees=[]; 


    employee[curent].name=employee.name;
  
    employee[curent].age= employee.age;

    employee[curent].salary=  employee.salary;
    employee[curent].dis= employee.dis;

  }


  nemployee.onkeyup=function(){
    var pat = /^[A-Z][a-z]{2,8}$/;
    if(pat.test(nemployee.value)){
      addbtn.removeAttribute('disabled');
    }
    else
   
    addbtn.disabled=true;
    

  } 