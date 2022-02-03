function myFunction () {
    const x = document.getElementById("selecionar").value;
    x.onchange()
    
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }

