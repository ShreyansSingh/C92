function adduser(){
    window.location="chat_room.html";
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
console.log("USERNAME:"+user_name+"-SET");
}

