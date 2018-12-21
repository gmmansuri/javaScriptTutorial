function getName(firstName,lastName,age,emailid,contactNumber) {
    var FirstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var age=document.getElementById("age").value;
    var contactNumber=document.getElementById("contactNumber").value;
    var emailid=document.getElementById("emailId").value;
   
   alert("welcome "+FirstName);
   console.log(lastName);
   console.log(age);
   console.log(contactNumber);
   console.log(emailid);
    
}
window.onload=function(){getTime();}
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();   
document.getElementById("dateTime").innerHTML=  h+":"+m+":"+s
setTimeout(function(){getTime()},1000); 
}