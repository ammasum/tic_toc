var game_roll = document.querySelectorAll(".game_roll"); //Select all square box
var game_dice = "X"; // X or 0
var player_num = document.querySelector("#player"); //which player trun
var count_click = 0; //cound how many box select
for(var i = 0; i<game_roll.length; i++){ //loop through all box
    game_roll[i].addEventListener("click", function(){
        if(this.querySelector("h1").innerHTML == ""){ //check is box empty 
            var player = player_num.innerText; //get present player num
            player = player.replace(/\s/g, '');  //remove all white char
            this.querySelector("h1").innerHTML = game_dice; // changing dice
            if(game_dice == "X"){
                this.querySelector("h1").style.color = "#EC19D6";
            }
            else{
                this.querySelector("h1").style.color = "#50FB00";
            }
            /// below calling function to check game condition, is it win click or draw
            left_to_right(this.getAttribute("id"), game_dice, player_num.innerText);
            top_to_down(this.getAttribute("id"), game_dice, player_num.innerText);
            angle(game_dice, player_num.innerText);
            if(player == "1"){ //changing player trun
                player_num.innerHTML = "2";
            }
            else{
                player_num.innerHTML = "1";
            }
            if(game_dice == "0"){
                game_dice = "X";
            }
            else{
                game_dice = "0";
            }
            count_click++; // increase counting
            if(count_click === 9){ //if all box is select then over
                var won = document.querySelector("#won_text");
                won.innerHTML = "Draw";
            }
        }
        
    });
}

function left_to_right(id, val, player){
    var col_num = id[4];
    var a = document.querySelector("#col_" + col_num + "_row_1").innerText;
    var b = document.querySelector("#col_" + col_num + "_row_2").innerText;
    var c = document.querySelector("#col_" + col_num + "_row_3").innerText;
    a = a.replace(/\s/g, '');
    b = b.replace(/\s/g, '');
    c = c.replace(/\s/g, '');
    player = player.replace(/\s/g, '');
    if(a == val && b == val && c == val){
        var won = document.querySelector("#won_text");
        var won = document.querySelector("#won_text");
        won.innerHTML = "Player " + player + " won";
    }
}

function top_to_down(id, val, player){
    var row_num = id[10];
    var a = document.querySelector("#col_1" + "_row_" + row_num).innerText;
    var b = document.querySelector("#col_2" + "_row_" + row_num).innerText;
    var c = document.querySelector("#col_3" + "_row_" + row_num).innerText;
    a = a.replace(/\s/g, '');
    b = b.replace(/\s/g, '');
    c = c.replace(/\s/g, '');
    player = player.replace(/\s/g, '');
    if(a == val && b == val && c == val){
        var won = document.querySelector("#won_text");
        won.innerHTML = "Player " + player + " won";
    }
}
function angle(val, player){
    var a = document.querySelector("#col_1_row_1").innerText;
    var b = document.querySelector("#col_2_row_2").innerText;
    var c = document.querySelector("#col_3_row_3").innerText;
    a = a.replace(/\s/g, '');
    b = b.replace(/\s/g, '');
    c = c.replace(/\s/g, '');
    player = player.replace(/\s/g, '');
    if(a == val && b == val && c == val){
        var won = document.querySelector("#won_text");
        won.innerHTML = "Player " + player + " won";
    }
    var a = document.querySelector("#col_1_row_3").innerText;
    var c = document.querySelector("#col_3_row_1").innerText;
    a = a.replace(/\s/g, '');
    c = c.replace(/\s/g, '');
    
    if(a == val && b == val && c == val){
        var won = document.querySelector("#won_text");
        won.innerHTML = "Player " + player + " won";
    }
}
