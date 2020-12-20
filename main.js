

function getAndUpdate(){
  console.log("updating....");

 a = document.getElementById("name").value;
 b = document.getElementById("email").value;
 c = document.getElementById("number").value;
 d = document.getElementById("write").value;
 
   if (localStorage.getItem('itemJson') == null) {
     itemJsonArray = [];
     itemJsonArray.push([a, b,c,d]);
     localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
   }
   else {
     itemJsonArrayStr = localStorage.getItem('itemJson')
     itemJsonArray = JSON.parse(itemJsonArrayStr);
     itemJsonArray.push([a, b,c,d]);
     localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
   }
   update()
   }
   
   function update() {
     if (localStorage.getItem('itemJson') == null) {
       itemJsonArray = [];
       localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
     }
     else {
       itemJsonArrayStr = localStorage.getItem('itemJson')
       itemJsonArray = JSON.parse(itemJsonArrayStr);
     }
   }

add = document.getElementById('add');
add.addEventListener("click", getAndUpdate);