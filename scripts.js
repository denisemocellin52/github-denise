var texto = "";
var tabuada = 5;
for (i = 0; i <= 10; i++) {
    texto += tabuada + " x " + i + " = " + (tabuada*i) + "<br />";
    document.getElementById("demo").innerHTML = texto;   
}
