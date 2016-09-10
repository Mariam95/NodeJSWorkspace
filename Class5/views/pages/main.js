var DATA = [];
var username;
load();

$(document).ready(
    function(){
        username = prompt("Enter your Username");
    }
);

$('#clear').on('click',function(){
    DATA=new Array();
    localStorage.msg='';
});

$('#submit').on('click',function(){
    var msg = $('#input').val();
    
    DATA.push(username + ': ' + msg); //sumair: hello
    renderJson(DATA);
    save();
    
    $('#input').val('');
});

function renderJson(data){
    $('#container').empty();
    
    for(var i in data){
        $('#container').append(data[i] + '</br>');
    }
}

function save(){
    localStorage.msg = JSON.stringify(DATA);
}

function load(){
    if(localStorage.msg){
        DATA = JSON.parse(localStorage.msg);
        renderJson(DATA);
    }
    
}