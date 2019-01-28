
function getall(){
var xhr = new XMLHttpRequest();
xhr.open('get','https://8fj132fssi.execute-api.us-east-2.amazonaws.com/mystage/getdata');
xhr.onreadystatechange= function(event){
     if(xhr.readyState === 4 && xhr.status === 200) { 
      var x=JSON.parse(event.target.response);
    var i 
  
     
    for(i=0;x.length;i++){
          
          add_ui(x[i].StationId,x[i].Target,x[i].Aktual,x[i].Varianz);
      }  
        
      
         
     }
 
  
  
}
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();
    
}

function add_to_db(){
    var xhr = new XMLHttpRequest();
xhr.open('Post','https://8fj132fssi.execute-api.us-east-2.amazonaws.com/mystage/myapi');
xhr.onreadystatechange= function(event){
  
  console.log(event.target.response);
}
 
xhr.setRequestHeader('Content-Type','application/json');
var ttarget= document.querySelector('.add-target').value ; 
xhr.send(JSON.stringify({"target":ttarget,"aktual":0,"varianz":0}));
}




function update_db(id,actual,varianz){
       var xhr = new XMLHttpRequest();
xhr.open('Post','https://8fj132fssi.execute-api.us-east-2.amazonaws.com/mystage/update');
xhr.onreadystatechange= function(event){
  
  console.log(event.target.response);
}
 
xhr.setRequestHeader('Content-Type','application/json');
 
xhr.send(JSON.stringify({"id":id,"actual":actual,"varianz":varianz}));
}






function remove(){
    
    
 var Parent = document.getElementById('wanted');
while(Parent.hasChildNodes())
{
   Parent.removeChild(Parent.firstChild);
}
    
    
}
function add_ui(id,target,aktual,varianz){
     
    
    var newhtml ; 
    var html = '<tr onclick="modal(this)" id="child"><td>idd</td><td>target</td><td>aktual</td><td>varianz</td></tr>'
  //  var html =  '<tr onclick="modal(this)" id="child"><td>idd</td><td>target</td><td>aktual</td><td>varianz</td></tr>';
    newhtml = html.replace("idd",id);
    newhtml = newhtml.replace("target",target);
   newhtml = newhtml.replace("aktual",aktual);
    newhtml = newhtml.replace("varianz",varianz);
 document.querySelector('table').insertAdjacentHTML('beforeend',newhtml);
      console.log('hii');
}
function btn_function (){
    
   add_to_db();
    remove();
    
   //  getall();
    
    
}
function modal(x){
    var variance ; 
    var indice = x.rowIndex ; 
  var table= document.getElementById("parent"); 
var id = table.rows[indice].cells[0].innerHTML ; 
var aktual= table.rows[indice].cells[2].innerHTML ; 
 var target= table.rows[indice].cells[1].innerHTML ; 
  
    
    var aktual = prompt("enter the variance","variance") ; 
    if(aktual!=null){
      variance = aktual-target ; 
    }
    if(variance > 0) {
          table.rows[indice].cells[3].innerHTML= variance;
           table.rows[indice].cells[3].style.color="blue";
         table.rows[indice].cells[2].innerHTML= aktual;
    }
    else{
         table.rows[indice].cells[3].innerHTML= variance;
           table.rows[indice].cells[3].style.color="red";
          table.rows[indice].cells[2].innerHTML= aktual;
    }
    update_db(id,aktual,variance);
}
function calling_data() {
  
  setInterval(function(){ remove();},1000);
}   
    function remove_tabel(){f
         setInterval(function(){ getall(); }, 2000);
    }

document.querySelector('.btn-add').addEventListener('click',btn_function);


document.querySelector('.testt').addEventListener('click',getall);
function a(){
     var node = document.getElementById("child");
     console.log(node);
 }


function pop() {
    document.getElementById('id01').style.display='block';
}