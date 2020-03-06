var speed = 600;
//var stevila = [5,12,27,70,53,21,48,96,31,47,19,39,28,63,86,81,24,92];
var stevila = [];

if(window.matchMedia("(min-width: 1000px)").matches){
  dodaj_stolpce();
}

for(i=0; i<$(".najmansi").length; i++){
  $(".najmansi").css("width",$(".objema").width()/$(".najmansi").length+"px") //da naredi vse stolpce enako siroko, ter da zasedejo vso širino
  var trenutna = Math.floor(Math.random()*($(".objema").height()-100));
  if(stevila.includes(trenutna)){
    while(stevila.includes(trenutna)){
      trenutna = Math.floor(Math.random()*($(".objema").height()-100));
    }
  }
  $(".najmansi:eq("+i+")").css("height",trenutna+"px");
  stevila.push(trenutna);
}

// $(".najmansi:eq("+0+")").css("background-color", "red");
var a = true;
var count = 0;

function start(){
  if(a){
    a = false;
    changeout();
  }
}

function changeout() {
  setTimeout(function(){
    $(".najmansi:eq("+count+")").css("background-color", "red");
    $(".najmansi:eq("+(count+1)+")").css("background-color", "red");
    if(stevila[count]>(stevila[count+1])){
      $(".najmansi:eq("+count+")").fadeOut(speed);
      $(".najmansi:eq("+(count+1)+")").fadeOut(speed);
      var zacasna = stevila[count];
      stevila[count] = stevila[count+1];
      stevila[count+1] = zacasna;
      a = true;
      setTimeout(function(){
        $(".najmansi:eq("+(count-1)+")").css("height",stevila[count-1]+"px").fadeToggle(speed);
        $(".najmansi:eq("+count+")").css("height",stevila[count]+"px").fadeToggle(speed);
      },speed);
    }
    setTimeout(function(){
      $(".najmansi:eq("+(count-1)+")").css("background-color", "green");
      $(".najmansi:eq("+(count)+")").css("background-color", "green");
    },speed*2)
    if(count<stevila.length){
      //debugger;
      count++;
      console.log(stevila);
      changeout();
    }else{
      //debugger;
      count = 0;
      start();
    }
  }, (speed*2))
}

function get_value(){
  var value = $("#list").val();
  var value1 = $("#list1").val();

  if(value1 == "pocasi"){
    speed = 600;
  }else if(value1 == "srednje_hitro"){
    speed = 400;
  }else if(value1 == "hitro"){
    speed = 230;
  }else if(value1 == "izjemno_hitro"){
    speed = 25;
  }

  if(value == "Bubble_sort"){
    start();
  }else if (value == "Quick_sort") {
    quick_sort(stevila,0,stevila.length-1);
  }else if (value == "Insertion_sort") {
    insertion_sort(stevila);
  }
}

function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}


async function quick_sort(a,left,right){
    if (right > left){
        var i=left, j=right-1, tmp;
        var v = a[right]; //pivot
        var counter = 0;
        do {
            while(a[i]<v)i++;
            while(j>0 && a[j]>v)j--;
            $(".najmansi:eq("+i+")").css("background-color", "red");
            $(".najmansi:eq("+(j)+")").css("background-color", "red");
            if(i < j){
                $(".najmansi:eq("+i+")").fadeOut(speed);
                $(".najmansi:eq("+j+")").fadeOut(speed);
                await sleep(speed);
                tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
                $(".najmansi:eq("+i+")").css("height",a[i]+"px").fadeIn(speed);
                $(".najmansi:eq("+j+")").css("height",a[j]+"px").fadeIn(speed);
                await sleep(speed);
            }
            $(".najmansi:eq("+(i)+")").css("background-color", "green");
            $(".najmansi:eq("+(j)+")").css("background-color", "green");
        } while(i < j){
          $(".najmansi:eq("+i+")").css("background-color", "red");
          $(".najmansi:eq("+right+")").css("background-color", "red");
          $(".najmansi:eq("+i+")").fadeOut(speed);
          $(".najmansi:eq("+right+")").fadeOut(speed);
          await sleep(speed)
          tmp = a[right];
          a[right] = a[i];
          a[i] = tmp;
          $(".najmansi:eq("+i+")").css("height",stevila[i]+"px").fadeIn(speed);
          $(".najmansi:eq("+right+")").css("height",stevila[right]+"px").fadeIn(speed);
          await sleep(speed)
          $(".najmansi:eq("+i+")").css("background-color", "green");
          $(".najmansi:eq("+right+")").css("background-color", "green");
          await quick_sort(a,left,i-1);
          await quick_sort(a,i+1,right);
        }
    }
}

async function insertion_sort(tabela){
  for(var j = 0; j<=tabela.length; j++){
    while(tabela[j]>tabela[j+1]){
      $(".najmansi:eq("+j+")").css("background-color", "red");
      $(".najmansi:eq("+(j+1)+")").css("background-color", "red");
      $(".najmansi:eq("+j+")").fadeOut(speed);
      $(".najmansi:eq("+(j+1)+")").fadeOut(speed);
      await sleep(speed);
      var current = tabela[j+1];
      tabela[j+1] = tabela[j];
      tabela[j] = current
      $(".najmansi:eq("+j+")").css("height",tabela[j]+"px").fadeIn(speed);
      $(".najmansi:eq("+(j+1)+")").css("height",tabela[j+1]+"px").fadeIn(speed);
      await sleep(speed);
      $(".najmansi:eq("+(j)+")").css("background-color", "green");
      $(".najmansi:eq("+(j+1)+")").css("background-color", "green");
      j--
    }
  }
  console.log(stevila)
}

function dodaj_stolpce(){
  for(var no = 0; no<100; no++){
    $( "<div class='najmansi'></div>" ).insertAfter( ".najmansi:last-child" );
  }
}
