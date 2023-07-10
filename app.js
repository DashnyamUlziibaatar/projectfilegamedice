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

function initgame()
{
    //Тоглогчийн оноог цуглуулах хэрэгцээтэй/
scores = [0,0];

//Тоглогчийн түр оноог цуглуулах хувьсагч хэрэгтэй
roundScore = 0;

//Тоглогчийн ээлжийг хадгалдах хувьсагч хэрэгтэй 1-р тоглогч 0 2-р тоглогч 0 болгож тэмдэглэнэ.
activePlayer = 0;
}

var dicedom = document.querySelector(".dice")

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
            
            switchplayer();

    }
})
//hold event listener
document.querySelector(".btn-hold").addEventListener("click",function()
{
    //Тоглогчийн цуглуулсан оноог хурамтлуулж нэмнэ.
    //if(activePlayer === 0)
    //{
    //scores[0] = scores[0]+roundScore;}
    //else 
    //{scores[1] = scores[1]+roundScore;}

    scores[activePlayer]=scores[activePlayer]+roundScore;
    
//Дэлгэрцийн оноо өөрчилнө.
document.getElementById("score-" + activePlayer).textContent = 
scores[activePlayer];
//ээлийн оноог 0 болгоно
roundScore = 0
document.getElementById("current-"+activePlayer).textContent="0";

if(scores[activePlayer]>=20)
{
    document.getElementById("name-"+activePlayer).textContent = "winner";
}
else 
{
   switchplayer();
}
})
//Тоглогчийн нэрийг шилжүүлэх
function switchplayer()
{
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer =0);
    //Улаан цэг шилжүүлэх
   document.querySelector(".player-0-panel").classList.toggle("active");
   document.querySelector(".player-1-panel").classList.toggle("active");
   dicedom.style.display = "none";
}
//Шинэ тоглоом эхлүүлэх event 

document.querySelector(".btn-new").addEventListener("click",function(
)
{
initgame();
})