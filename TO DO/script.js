function addbtn(){
    const input=document.getElementById("ttext")
    const tasktext=input.value.trim()

if (tasktext=== ""){
    alert("please add task")
    return;
}

const li= document.createElement("li")
li.textContent=tasktext

const delbtn=document.createElement("button")
delbtn.textContent="X"
delbtn.className="delete_btn"
delbtn.onclick=function(){
    li.remove()
    return;
}
li.appendChild(delbtn);
document.getElementById("tasklist").appendChild(li);
input.value = "";
}
