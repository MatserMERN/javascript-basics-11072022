/*
   ? callback function - function which is being passed as a paremeter
   ?                     to another function is called callback function
*/
function display(value){
    console.log(value)
}

var test = function(){

}

display(test)

display(function(){
    
})