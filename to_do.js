addTask = function() {
  myList = document.querySelector("#list");
  task = document.querySelector("#task");
  litem = document.createElement("li");
  
  checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  category = document.querySelector("#priority");
  litem.classList.add(category.value);
  litem.appendChild(checkbox);
  
  text = document.createTextNode(task.value);
  litem.appendChild(text);
  myList.appendChild(litem);
  
  task.value = ""
  
  
}
