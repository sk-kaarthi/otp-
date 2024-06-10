const inputs=document.querySelector(".inputs");

inputs.addEventListener("input",function(e){
    const target=e.target;
    const val=target.value;
    //if the given input is text not a number means print empty
    if(isNaN(val)){
        target.value="";

        return;
    }
//number is not empty and move to next box
    if(val!=""){
        const next=target.nextElementSibling;
        if(next){
            next.focus();
        }
    }
});


//if anny wrong input given empty the box by backspace and  dlete button
inputs.addEventListener("keyup",function(e){
    const target=e.target;
    const key=e.key.toLowerCase();
    if(key=="backspace" || key=="delete"){
        target.value="";
        const prev=target.previousElementSibling;
        if(prev){
            prev.focus();
        }
        return;
    }
})