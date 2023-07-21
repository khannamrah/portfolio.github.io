const submitButton=document.getElementById("submit");
const input = document.getElementById("username");


input.addEventListener("keypress", (e)=>{
    const value=e.currentTarget.value;
    if(value===""){
        submitButton.disabled=true;
    }
    else{
        submitButton.disabled=false;
    }
});