addTask = function() {
  myList = document.querySelector("#list");
  task = document.querySelector("#task").value;
  li = document.createElement("li");
  
  checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  category = document.querySelector("#priority");
  
  text = document.createTextNode(task);
  li.appendChild(text)
  myList.appendChild(li)
  
  
}
