addTask = function() {
  myList = document.querySelector("#list");
  task = document.querySelector("#task");
  li = document.createElement("li");
  
  checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "box";
  checkbox.onclick = Clickme;

  
  
  category = document.querySelector("#priority");
  li.classList.add(category.value);
  li.appendChild(checkbox);
 
  
  text = document.createTextNode(task.value);
  li.appendChild(text);
  myList.appendChild(li);
  task.value = ""
  localSave("list");
  
}
Clickme = function() {
  if (this.checked) {
    this.parentNode.classList.add("done");
  } else {
    this.parentNode.classList.remove("done");
    
  }
  localSave("list");
    
}

