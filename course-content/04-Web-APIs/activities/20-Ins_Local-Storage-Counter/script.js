var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");

if(count === null){
  count = 0;
  localStorage.setItem("count", count);
  counter.textContent = count;
}else {
  localStorage.setItem("count", count);
  counter.textContent = count;
}


addButton.addEventListener("click", function() {
	// console.log(count);
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function() {
  count--;
  

  if(count >=0){
    counter.textContent = count;
    localStorage.setItem("count", count);

  }
    

});

console.log(count);




// localStorage.setItem("Farley", "Meow");
// localStorage.removeItem("Farley");
// localStorage.clear();
