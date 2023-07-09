//Тоглогчийн оноог цуглуулах хэрэгцээтэй/
var scores = [0,0];

//Тоглогчийн түр оноог цуглуулах хувьсагч хэрэгтэй
var roundScore = 0;

//Тоглогчийн ээлжийг хадгалдах хувьсагч хэрэгтэй 1-р тоглогч 0 2-р тоглогч 0 болгож тэмдэглэнэ.
var activePlayer = 0;

//Шоо аль талаар буусныг хадгалах хувьсагч 1-6 гэсэн утгыг тус хувьсагчид санамсаргүй өгнө.
//1-6



//console.log("шоо "+dice+" ингэж буулаа");

document.getElementById("score-0").textContent="0";

window.document.getElementById("score-0").textContent = "0";

window.document.getElementById("score-1").textContent = "0";

window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

var dicedom = document.querySelector(".dice")
dicedom.style.display = "none";
//<button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
//Шоо хаях фүнкц
document.querySelector(".btn-roll").addEventListener("click", function ()
{
    var dice = Math.floor(Math.random()*6)+1;
    dicedom.style.display = "block";
    dicedom.src="dice-"+dice+".png";
    if (dice!==1)
    {
        //buusan toog onoo deer nemne;
        roundScore = roundScore+dice;
        document.getElementById("current-"+activePlayer).textContent=roundScore;

    }
        else {
            //Тоглогчийн цуглуулсан оноог 0 болгож байна.
            roundScore = 0;
            document.getElementById("current-"+activePlayer).textContent=roundScore;
            
            //Тоглогчийн ээлжийг шилжүүлэх код
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer =0);
      //Улаан цэг шилжүүлэх
     document.querySelector(".player-0-panel").classList.toggle("active");
     document.querySelector(".player-1-panel").classList.toggle("active");
     dicedom.style.display = "none";

    }
})
