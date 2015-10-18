addTask = function() {
  myList = document.querySelector("#list");
  task = document.querySelector("#task");
  li = document.createElement("li");
  
  checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = Clickme();
  
  
  category = document.querySelector("#priority");
  li.classList.add(category.value);
  li.appendChild(checkbox);
  
  text = document.createTextNode(task.value);
  li.appendChild(text);
  myList.appendChild(li);
  
  task.value = ""
  
  
}
Clickme = function() {
  checkbox = document.querySelector("input");
  finished = document.getElementsByClassName("finished");
  
  if (checkbox.checked) {
    checkbox.classList.add("finished");
  }
  if (checkbox.unchecked) {
    checkbox.classList.add("unfinishd");
  }
    
}

