window.addEventListener('load', function () {

    let todoArray = ["Do homework", "Buy groceries", "Cook dinner"];
    
    //take all the array items and display them on screen
    function createTodosFromArray(){

        let ul = document.querySelector('#todos');
        
        for (let i=0; i < todoArray.length; i++) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(todoArray[i]));
            ul.appendChild(li);
        }
    }

    function clearTodoElements() {
        Array.prototype.forEach.call( document.querySelectorAll('#todos li'), function( node ) {
            node.parentNode.removeChild( node );
        });  
        document.querySelector("[name='newTodo']").value = '';
    }

    //
    createTodosFromArray();
    
    //on page load
    document.querySelector("[name='newTodo']").onkeydown = function(e){    
        if(e.keyCode == 13){

            let newItem = this.value;            
            todoArray.push(newItem);  

            clearTodoElements()              
            createTodosFromArray();

            e.preventDefault();
        }
     };
});


