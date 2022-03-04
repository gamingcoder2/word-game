var player1= localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");

var player1_score=0;
var player2_score=0;

document.getElementById("player1").innerHTML=player1 + " : ";
document.getElementById("player2").innerHTML=player2 + " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2;

function send(){
get_word=document.getElementById("Word").value;
word=get_word.toLowerCase();
c1=word.charAt(1);
length_divide_2=Math.floor(word.length/2);
c2=word.charAt(length_divide_2);
length_minus_1=word.length-1;
c3=word.charAt(length_minus_1);

remove_c1=word.replace(c1,"_");
remove_c2=remove_c1.replace(c2,"_");
remove_c3=remove_c2.replace(c3,"_");

question_word="<h4 id='question_word'> Question: "+remove_c3+"</h4>";
input_box="<br> Answer: <input type='text' id='input_check_box'>";
check_button="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
row= question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("Word").value="";
}

answer_turn="Player 2";
question_turn="Player 1";

function check(){
    var get_answer = document.getElementById("input_check_box").value;
    var answer= get_answer.toLowerCase();
console.log(word);
console.log(answer);
    if (word==answer){

        if (answer_turn=="Player 2"){
        player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;

}
else{

    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;

    
}
    }

    if (answer_turn=="Player 1"){

        answer_turn="Player 2";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player2;
        
    }
    else{

        answer_turn="Player 1";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player1;
    }

    if (question_turn=="Player 1"){

        question_turn="Player 2";
        document.getElementById("player_question").innerHTML="Question Turn- "+player2;
    }
    else{

        question_turn="Player 1";
        document.getElementById("player_question").innerHTML="Question Turn- "+player1;
    }

    document.getElementById("output").innerHTML="";

}

