function insert(num1) {
  document.getElementById("output").value =
    document.getElementById("output").value + num1;
};

function calculate(){
    document.getElementById("output").value = eval(document.getElementById("output").value);
};

function clearall(){
    document.getElementById("output").value="";
}


