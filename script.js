var Things = document.getElementById("things");
    var list = document.getElementById("list");
    var editItem = null; 
    function add(){
        let value = Things.value.trim();
        if(value==""){
            alert("Please Add Item")
            return
        }
        if(editItem == null){
            var listItem = document.createElement("li");
            listItem.innerHTML = value +
            ' <button onclick="deleteItem(event)" class="btn-del">Delete</button>' +
            ' <button onclick="change(event)" class="btn-edit">Edit</button>';

            list.append(listItem);
        }
        else{
            editItem.firstChild.textContent = value;
            editItem = null;
        }

        Things.value = "";
    }

    function deleteItem(event) {
        event.target.parentElement.remove();
    }

    function change(event){
        editItem = event.target.parentElement;
        Things.value = editItem.firstChild.textContent.trim();
    }