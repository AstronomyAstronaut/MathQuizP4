player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML = player1name + " : ";
document.getElementById("player2name").innerHTML = player2name + " : ";

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("playerquestion").innerHTML = "Question Turn : " + player1name;
document.getElementById("playeranswer").innerHTML = "Answer Turn : " + player2name;

function send()
{
    number1 = document.getElementById("number1").value ;
    number2 = document.getElementById("number2").value ;
    actualanswer = parseInt(number1) * parseInt(number2);

    
    q = "<h4>Q. "+number1+" X "+ number2 +"</h4>";
    i = "<br> Answer: <input id='checkbox' type='text'>";
    c = "<br><br> <button class='btn btn-success' onclick='check()'>Check</button>";
    r = q + i + c;
    document.getElementById("output").innerHTML = r;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    getanswer = document.getElementById("checkbox").value;
    
    if (getanswer == actualanswer)
    {
        if (answer_turn == "player1")
        {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        else
        {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }

    if (question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("playerquestion").innerHTML = "Question turn : " + player2name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("playerquestion").innerHTML = "Question turn : " + player1name;  
    }
    
    if (answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("playeranswer").innerHTML = "Answer turn : " + player2name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("playeranswer").innerHTML = "Answer turn : " + player1name;  
    }
    document.getElementById("output").innerHTML = "";
}