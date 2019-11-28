function inputVal(num){
    document.getElementById("userIp").value+=num
    console.log(document.getElementById("userIp").value)
}
function isEqual(){
    document.getElementById("userIp").value=eval(document.getElementById("userIp").value)
}
function clean(){
    document.getElementById("userIp").value="";   
}
function back(){
    var a =document.getElementById("userIp").value.length;
    document.getElementById("userIp").value=document.getElementById("userIp").value.slice(0,a-1);   
}
