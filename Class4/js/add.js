var counter = 0;

function addData(){
    var input = document.getElementById('input').value;
    
   
    var div = document.getElementById('container');
    
    div.innerHTML = div.innerHTML + "<div onclick='removeItem(this.id)' id='"+ counter++ +"'><input type='checkbox' '/><label>" 
        + input + "</label></div>";
}

function removeItem(id){
    var div = document.getElementById(id);
    div.parentNode.removeChild(div);
}
