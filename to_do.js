addTask = function() {
  myList = document.querySelector("#list");
  task = document.querySelector("#task");
  li = document.createElement("li");
  
  checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  
  category = document.querySelector("#priority");
  li.classList.add(category.value);
  li.appendChild(checkbox);
  
  text = document.createTextNode(task.value);
  li.appendChild(text);
  myList.appendChild(li);
  
  task.value = ""
  
  
}
document.body.section.li.input.onclick = function() {
  checkbox = document.querySelector("input")
  li = document.querySelector("li")
  
  if (input.checked) {
    li.classList.add("finished");
  } else {
    li.classList.remove("finished");
  }
    
}

