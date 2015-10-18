addTask = function() {
  myList = document.querySelector("#list");
  task = document.querySelector("#task").value;
  li = document.createElement("li");
  
  checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  category = document.querySelector("#priority").value;
  
  text = document.createTextNode(task);
  text.classList.add(category);
  li.appendChild(checkbox);
  li.appendChild(text);
  myList.appendChild(li);
  
  
}
