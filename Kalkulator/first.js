var del = document.querySelector("h1");
var gumbi = document.querySelectorAll("td");
var l = 0;
var stevila = [];
var operacije = [];

for(var i = 0; i<gumbi.length; i++) {
  gumbi[i].addEventListener("click", function() {
    var j = this.textContent;
    if(j==9||j==8||j==7||j==6||j==5||j==4||j==3||j==2||j==1||j==0) {
        del.textContent += j;
        l = parseFloat(del.textContent);
    }else if (j=="/") {
        stevila.push(l);
        l = 0;
        del.textContent = "";
        operacije.push("/");
    }else if (j=="x") {
        stevila.push(l);
        l = 0;
        del.textContent = "";
        operacije.push("x");
    }else if (j=="-") {
        stevila.push(l);
        l = 0;
        del.textContent = "";
        operacije.push("-");
    }else if (j=="+") {
        stevila.push(l);
        l = 0;
        del.textContent = "";
        operacije.push("+");
    }else if (j=="C") {
        j = 0;
        del.textContent = "";
        stevila = [];
        operacije = [];
    }else if (j=="=") {
        stevila.push(l);
        var rezultat = stevila[0];
        var m = 0;
        while(m<operacije.length){
          if(operacije[m]=="x"){
            rezultat *= stevila[m+1];
            del.textContent = rezultat;
            m++
          }else if (operacije[m]=="/") {
            rezultat /= stevila[m+1];
            del.textContent = rezultat;
            m++
          }else if (operacije[m]=="+") {
            var md= stevila[m+1];
            console.log("md")
            for(var p = m+1;p<=operacije.length;p++){
              if(operacije[p]=="+"||operacije[p]=="-"||operacije[p]==undefined){
                rezultat += md;
                del.textContent = rezultat;
                m++
                break;
              }else if(operacije[p]=="x"){
                md *= stevila[p+1];
                m++;
              }else {
                md /= stevila[p+1];
                m++;
              }
            }
          }else if (operacije[m]=="-") {
            var md= stevila[m+1];
            for(var p = m+1;p<=operacije.length;p++){
              if(operacije[p]=="+"||operacije[p]=="-"||operacije[p]==undefined){
                rezultat -= md;
                del.textContent = rezultat;
                m++
                break;
              }else if(operacije[p]=="x"){
                md *= stevila[p+1];
                m++;
              }else {
                md /= stevila[p+1];
                m++;
              }
            }
          }
          stevila = [];
          operacije = [];
        }
      }else if(j=="<"){
        if(operacije.length==stevila.length && del.textContent==""){
          operacije.pop();
        }else{
          var novo = del.textContent
          if(operacije.length<stevila.length&&novo==""){
            var lj = stevila[stevila.length-1];
            var sc = lj.toString(10);
            sc = sc.split("");
            console.log(sc);
            sc.pop();
            for(var v = 0; v<sc.length; v++){
              del.textContent += sc[v];
            }
            stevila.pop();
          }else if (del.textContent != 0) {
            var vsebina = del.textContent;
            vsebina = vsebina.split("");
            vsebina.pop()
            del.textContent = "";
            for(var v = 0; v<vsebina.length; v++){
              del.textContent += vsebina[v];
            }
          }
        }
      }else {
        del.textContent += ".";
      }
    })
  }
