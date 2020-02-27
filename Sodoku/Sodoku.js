var a = document.querySelectorAll("tr");
var vrednosti_td = ["a","b","c","d","e","f","g","h","i"];
var hitrost;

async function sort() {
  //var lokacije_vrednosti = ["prva_vrsta","druga_vrsta","tretja_vrsta","cetrta_vrsta"]
  //var lokacije_praznih_vrednosti = ["lokacije_prve_vrste", "lokacije_druge_vrste", "okacije_tretje_vrste", "lokacije_cetrte_vrste"]
  var prva_vrsta = [];
  var lokacije_prve_vrste = [];
  var druga_vrsta = [];
  var lokacije_druge_vrste = [];
  var tretja_vrsta = [];
  var lokacije_tretje_vrste = [];
  var cetrta_vrsta = [] ;
  var lokacije_cetrte_vrste = [];
  var peta_vrsta = [];
  var lokacije_pete_vrste = [];
  var sesta_vrsta = [];
  var lokacije_seste_vrste = [];
  var sedma_vrsta = [];
  var lokacije_sedme_vrste = [];
  var osma_vrsta = [];
  var lokacije_osme_vrste = [];
  var deveta_vrsta = [];
  var lokacije_devete_vrste = [];

  pridobi_podatke(prva_vrsta,druga_vrsta,tretja_vrsta,cetrta_vrsta,peta_vrsta,sesta_vrsta,sedma_vrsta,osma_vrsta,deveta_vrsta,lokacije_prve_vrste,lokacije_druge_vrste,lokacije_tretje_vrste,lokacije_cetrte_vrste,lokacije_pete_vrste,lokacije_seste_vrste,lokacije_sedme_vrste,lokacije_osme_vrste,lokacije_devete_vrste);

  //da spreminjamo vrednosti v arrayu
  var vsota = [0,0,0,0,0,0,0,0,0];
  var mesto = 0;
  var naprej = 1;
  var vrstica = 0;
  //var mesto = 0;
  //var naprej = 1;
  var p = true;
  while(p){
    //da vidimo koliko je vsota vseh stevk v arrayu
    var o = ["lokacije_prve_vrste","lokacije_druge_vrste","lokacije_tretje_vrste","lokacije_cetrte_vrste", "lokacije_pete_vrste","lokacije_seste_vrste","lokacije_sedme_vrste","lokacije_osme_vrste","lokacije_devete_vrste"]
    var m = ["prva_vrsta","druga_vrsta","tretja_vrsta","cetrta_vrsta","peta_vrsta","sesta_vrsta","sedma_vrsta","osma_vrsta","deveta_vrsta"];
    vsota = [0,0,0,0,0,0,0,0,0];
    for (var s = 0; s < 9; s++) {
      for (var v = 0; v < 9; v++) {
        vsota[s] += eval(m[s])[v];
      }
    }
    //debugger;
    //da dodajamo ali oduzemamp številke iz arraya
    if(vsota[0] > 44 && vsota[1] > 44 && vsota[2] > 44 && vsota[3] > 44 && vsota[4] > 44 && vsota[5] > 44 && vsota[6] > 44 && vsota[7] > 44 && vsota[8] > 44){
      console.log("vse so 10");
      //debugger;
      // for(s = 0;s<9;s++){
      //   for(b=0;b<eval(o[s]).length;b++){
      //     a[s].querySelector("."+vrednosti_td[eval(o[s])[b]]).value = eval(m[s])[eval(o[s])[b]];
      //   }
      // }
      p = false;
    }else if (vsota[vrstica] > 44) {
      vrstica++;
      mesto=0;
    }else {
      //var širina = 0;
      while (true) {
        var as = 0;
        var bs = 0;

        if(eval(o[vrstica])[mesto]<3 && eval(o[vrstica])[mesto]>-1){
          bs = 0;
        }else if(eval(o[vrstica])[mesto]<6 && eval(o[vrstica])[mesto]>2){
          bs = 3;
        }else if(eval(o[vrstica])[mesto]<9 &&  eval(o[vrstica])[mesto]>5){
          bs = 6
        }

        if(vrstica<3 && vrstica>-1){
          as = 0;
        }else if(vrstica<6 && vrstica>2){
          as = 3;
        }else if(vrstica<9 && vrstica>5){
          as = 6;
        }
        //debugger;

        if(mesto<0){
          vrstica--;
          // console.log(eval(o[vrstica]));
          mesto = (eval(o[vrstica]).length)-1;
          if(eval(m[vrstica])[eval(o[vrstica])[mesto]]<9){
            naprej = eval(m[vrstica])[eval(o[vrstica])[mesto]]+1;
          }else{
            naprej = 9;
          }
        }else if(eval(m[vrstica]).includes(naprej)==false && prva_vrsta[eval(o[vrstica])[mesto]]!=naprej && druga_vrsta[eval(o[vrstica])[mesto]]!=naprej && tretja_vrsta[eval(o[vrstica])[mesto]] != naprej && cetrta_vrsta[eval(o[vrstica])[mesto]] != naprej && peta_vrsta[eval(o[vrstica])[mesto]]!=naprej && sesta_vrsta[eval(o[vrstica])[mesto]]!=naprej && sedma_vrsta[eval(o[vrstica])[mesto]]!=naprej && osma_vrsta[eval(o[vrstica])[mesto]]!=naprej && deveta_vrsta[eval(o[vrstica])[mesto]]!=naprej && (eval(m[as])[bs]!=naprej && eval(m[as])[bs+1]!=naprej && eval(m[as])[bs+2]!=naprej && eval(m[as+1])[bs]!=naprej && eval(m[as+1])[bs+1]!=naprej && eval(m[as+1])[bs+2]!=naprej && eval(m[as+2])[bs]!=naprej && eval(m[as+2])[bs+1]!=naprej && eval(m[as+2])[bs+2]!=naprej)){
          //var stevilo = eval(m[vrstica])[eval(o[mesto])];
          eval(m[vrstica])[eval(o[vrstica])[mesto]] = naprej;
          a[vrstica].querySelector("."+vrednosti_td[eval(o[vrstica])[mesto]]).value = naprej;
          if(hitrost != 0){
            await sleep(hitrost);
          }
          //setTimeout(function(){a[vrstica].querySelector("."+vrednosti_td[eval(o[vrstica])[mesto]]).value=naprej;},1000);//a
          //a[vrstica].querySelector("."+vrednosti_td[eval(o[vrstica])[mesto]]).value=naprej;
          mesto++;
          naprej = 1;
          break;
        }else if (((eval(m[vrstica]).includes(naprej)==true || prva_vrsta[eval(o[vrstica])[mesto]]==naprej || druga_vrsta[eval(o[vrstica])[mesto]]==naprej || tretja_vrsta[eval(o[vrstica])[mesto]] == naprej || cetrta_vrsta[eval(o[vrstica])[mesto]] == naprej || peta_vrsta[eval(o[vrstica])[mesto]]==naprej || sesta_vrsta[eval(o[vrstica])[mesto]]==naprej || sedma_vrsta[eval(o[vrstica])[mesto]]==naprej || osma_vrsta[eval(o[vrstica])[mesto]]==naprej || deveta_vrsta[eval(o[vrstica])[mesto]]==naprej) || (eval(m[as])[bs]==naprej || eval(m[as])[bs+1]==naprej || eval(m[as])[bs+2]==naprej || eval(m[as+1])[bs]==naprej || eval(m[as+1])[bs+1]==naprej || eval(m[as+1])[bs+2]==naprej || eval(m[as+2])[bs]==naprej|| eval(m[as+2])[bs+1]==naprej || eval(m[as+2])[bs+2]==naprej)) && naprej<9) {
          naprej++;
        }else{
          //debugger;
          eval(m[vrstica])[eval(o[vrstica])[mesto]] = 0;
          a[vrstica].querySelector("."+vrednosti_td[eval(o[vrstica])[mesto]]).value = "";
          if(hitrost != 0){
            await sleep(hitrost);
          }
          mesto--;
          if(eval(m[vrstica])[eval(o[vrstica])[mesto]]<9){//mislim da ni prav
            naprej = eval(m[vrstica])[eval(o[vrstica])[mesto]]+ 1;
          }else if(mesto>=0 && eval(m[vrstica])[eval(o[vrstica])[mesto]]>8){
            eval(m[vrstica])[eval(o[vrstica])[mesto]] = 0;
            a[vrstica].querySelector("."+vrednosti_td[eval(o[vrstica])[mesto]]).value = "";
            if(hitrost != 0){
              await sleep(hitrost);
            }
            //a[vrstica].querySelector("."+vrednosti_td[eval(o[vrstica])[mesto]]).value="";
            mesto--;
            naprej = eval(m[vrstica])[eval(o[vrstica])[mesto]]+ 1;
          }
        }
      }
    }
  }
}

function pridobi_podatke(prva,druga,tretja,cetrta,peta,sesta,sedma,osma,deveta,lokacija_ena, lokacija_dve, lokacija_tri, lokacija_stiri,lokacija_pet,lokacija_sest,lokacija_sedem,lokacija_osem,lokacija_devet){
  //da dobimo vse vrednosti td-jev v prvi tr
  for (var g = 0; g < 9; g++) {//da gremo čez vse vrste
    for(var i = 0;i<9; i++){//da gremo cez vsak element v vsaki vrsti
      if(a[g].querySelector("."+vrednosti_td[i]).value == ""){
        switch (g) {
          case 0: lokacija_ena.push(i)/*da doda stevilko na kateri lokacije je prazno mesto*/; prva.push(0)/*da doda 0 v array*/; break;
          case 1: lokacija_dve.push(i); druga.push(0); break;
          case 2: lokacija_tri.push(i); tretja.push(0); break;
          case 3: lokacija_stiri.push(i); cetrta.push(0); break;
          case 4: lokacija_pet.push(i); peta.push(0); break;
          case 5: lokacija_sest.push(i); sesta.push(0); break;
          case 6: lokacija_sedem.push(i); sedma.push(0); break;
          case 7: lokacija_osem.push(i); osma.push(0); break;
          case 8: lokacija_devet.push(i); deveta.push(0); break;
        }
      }else {
        switch (g) {
          case 0: {prva.push(parseInt(a[g].querySelector("."+vrednosti_td[i]).value)); a[g].querySelector("."+vrednosti_td[i]).style.backgroundColor="#5e5e5e"; a[g].querySelectorAll("td")[i].style.backgroundColor="#5e5e5e"};break;//doda vrednost v tabelo, ki se nahaja v dom elementu
          case 1: {druga.push(parseInt(a[g].querySelector("."+vrednosti_td[i]).value)); a[g].querySelector("."+vrednosti_td[i]).style.backgroundColor="#5e5e5e"; a[g].querySelectorAll("td")[i].style.backgroundColor="#5e5e5e"};break;
          case 2: {tretja.push(parseInt(a[g].querySelector("."+vrednosti_td[i]).value)); a[g].querySelector("."+vrednosti_td[i]).style.backgroundColor="#5e5e5e"; a[g].querySelectorAll("td")[i].style.backgroundColor="#5e5e5e"};break;
          case 3: {cetrta.push(parseInt(a[g].querySelector("."+vrednosti_td[i]).value)); a[g].querySelector("."+vrednosti_td[i]).style.backgroundColor="#5e5e5e"; a[g].querySelectorAll("td")[i].style.backgroundColor="#5e5e5e"};break;
          case 4: {peta.push(parseInt(a[g].querySelector("."+vrednosti_td[i]).value)); a[g].querySelector("."+vrednosti_td[i]).style.backgroundColor="#5e5e5e"; a[g].querySelectorAll("td")[i].style.backgroundColor="#5e5e5e"};break;
          case 5: {sesta.push(parseInt(a[g].querySelector("."+vrednosti_td[i]).value)); a[g].querySelector("."+vrednosti_td[i]).style.backgroundColor="#5e5e5e"; a[g].querySelectorAll("td")[i].style.backgroundColor="#5e5e5e"};break;
          case 6: {sedma.push(parseInt(a[g].querySelector("."+vrednosti_td[i]).value)); a[g].querySelector("."+vrednosti_td[i]).style.backgroundColor="#5e5e5e"; a[g].querySelectorAll("td")[i].style.backgroundColor="#5e5e5e"};break;
          case 7: {osma.push(parseInt(a[g].querySelector("."+vrednosti_td[i]).value)); a[g].querySelector("."+vrednosti_td[i]).style.backgroundColor="#5e5e5e"; a[g].querySelectorAll("td")[i].style.backgroundColor="#5e5e5e"};break;
          case 8: {deveta.push(parseInt(a[g].querySelector("."+vrednosti_td[i]).value)); a[g].querySelector("."+vrednosti_td[i]).style.backgroundColor="#5e5e5e"; a[g].querySelectorAll("td")[i].style.backgroundColor="#5e5e5e"};break;
        }
      }
    }
  }
  if(document.querySelector(".hitrost").value=="takoj"){
    hitrost=0;
  }else if (document.querySelector(".hitrost").value == "hitro") {
    hitrost=2;
  }else if (document.querySelector(".hitrost").value=="srednje_hitro") {
    hitrost=9;
  }else {
    hitrost=15;
  }
}

function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("konec")
