let btn = document.querySelector("button");
let inp = document.querySelector("input");
let uls = document.querySelector("ul");

/* how to add submit button shotcut ?

inp.addEventListener("keydown",function(event){
    
    if (event.code=="Enter"){
        btn.addEventListener("click",function(){

    
            let text = inp.value;
        
            
        
        
            let lis = document.createElement("li");
            lis.innerText = text;
        
        
            uls.appendChild(lis);
        
        
            inp.value="";
        
        
        
        });
        
    };
});  */


btn.addEventListener("click",function(){

  
    //1st have to create object of li and set the text in it
    let lis = document.createElement("li");
    lis.innerText = inp.value;


    
    //for removing the  new input li creating a delete button.
    let del = document.createElement("button");
    del.innerText="Delete";
    
    // new input work will add in the ul & delete button will be add with li.
    lis.appendChild(del);
    uls.appendChild(lis);


    inp.value="";

});
// delete button kivabe add korbu sikhtesi

uls.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){
        let delItem = event.target.parentElement;
        console.dir(event.target.parentElement);
        delItem.remove();

    }
    

});
