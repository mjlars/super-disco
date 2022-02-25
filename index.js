    var nine =localStorage.getItem('1');
 document.getElementById('block9').value = JSON.parse(nine);

    var ten =localStorage.getItem('2');
 document.getElementById('block10').value = ten;

    var eleven =localStorage.getItem('3');
 document.getElementById('block11').value =eleven; 

    var twelve =localStorage.getItem('4');
 document.getElementById('block12').value =twelve; 

    var thirteen =localStorage.getItem('5');
 document.getElementById('block13').value =thirteen;

    var fourteen =localStorage.getItem('6');
 document.getElementById('block14').value =fourteen;

    var fifteen =localStorage.getItem('7');
 document.getElementById('block15').value =fifteen;

    var sixteen =localStorage.getItem('8');
 document.getElementById('block16').value =sixteen;

    var seventeen =localStorage.getItem('9');
 document.getElementById('block17').value =seventeen;

function getToday(){
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentDay);
}
getToday();

var now = new Date();
var time = now.getHours();
console.log(time);
console.log(now);

$(document).ready(function() {
    $(".my-input").each(function(i) {

    console.log($(".time-slot"));
    var dataTime = $(".time-slot")[i].id;
    var dataNum = Number(dataTime);
    console.log(dataTime);

    var color = $(`.my-input`)[i];
        console.log(color);
        console.log(dataNum);
    if(dataNum < time) {
        color.classList.add("past");
    } else if (dataNum === time) {
        color.classList.add("present");
    } else if (dataNum > time) {
        color.classList.add("future");
    }

    });
});

$(".saveBtn").click(function (){
    var nine = document.getElementById('block9').value;
    localStorage.setItem('1', JSON.stringify(nine));
    JSON.parse(localStorage.getItem(nine));
    var ten = document.getElementById('block10').value;
    localStorage.setItem('2', ten);
    var eleven = document.getElementById('block11').value;
    localStorage.setItem('3', eleven);
    var twelve = document.getElementById('block12').value;
    localStorage.setItem('4', twelve);
    var one = document.getElementById('block13').value;
    localStorage.setItem('5', one);
    var two = document.getElementById('block14').value;
    localStorage.setItem('6', two);
    var three = document.getElementById('block15').value;
    localStorage.setItem('7', three);
    var four = document.getElementById('block16').value;
    localStorage.setItem('8', four);
    var five = document.getElementById('block17').value;
    localStorage.setItem('9', five);
});
