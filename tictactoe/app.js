
$(() => {
    let $playerTurn = 1;
    let $playerOne = 'X';
    let $playerTwo = 'O';

    $('td').click(function() {
        if($playerTurn == 1) {
            if ($(this).text() == ''){
                $(this).text($playerOne); 
                $playerTurn = 2;
            }
            winningScenario();
            // win();
        }
        else {    
            if($playerTurn == 2) {
                if ($(this).text() == ''){
                    $(this).text($playerTwo); 
                    $playerTurn = 1;
            }
            winningScenario();
            // win();
            }
        }
    });
    const winningScenario = () => {
        if ($('.1').text() == $playerOne && $('.2').text() == $playerOne && $('.3').text() == $playerOne){
            alert('Player 1 Wins!');
        }
        else if ($('.4').text() == $playerOne && $('.5').text() == $playerOne && $('.6').text() == $playerOne){
            alert('Player 1 Wins!');
        }
        else if ($('.7').text() == $playerOne && $('.8').text() == $playerOne && $('.9').text() == $playerOne){
            alert('Player 1 Wins!');
        }
        else if ($('.1').text() == $playerOne && $('.5').text() == $playerOne && $('.9').text() == $playerOne){
            alert('Player 1 Wins!');
        }
        else if ($('.3').text() == $playerOne && $('.5').text() == $playerOne && $('.7').text() == $playerOne){
            alert('Player 1 Wins!');
        }
        else if ($('.1').text() == $playerOne && $('.4').text() == $playerOne && $('.7').text() == $playerOne){
            alert('Player 1 Wins!');
        }
        else if ($('.2').text() == $playerOne && $('.5').text() == $playerOne && $('.8').text() == $playerOne){
            alert('Player 1 Wins!');
        }
        else if ($('.3').text() == $playerOne && $('.6').text() == $playerOne && $('.9').text() == $playerOne){
            alert('Player 1 Wins!');
        }
        else if ($('.1').text() == $playerTwo && $('.2').text() == $playerTwo && $('.3').text() == $playerTwo){
            alert('Player 2 Wins!');
        }
        else if ($('.4').text() == $playerTwo && $('.5').text() == $playerTwo && $('.6').text() == $playerTwo){
            alert('Player 2 Wins!');
        }
        else if ($('.7').text() == $playerTwo && $('.8').text() == $playerTwo && $('.9').text() == $playerTwo){
            alert('Player 2 Wins!');
        }
        else if ($('.1').text() == $playerTwo && $('.5').text() == $playerTwo && $('.9').text() == $playerTwo){
            alert('Player 2 Wins!');
        }
        else if ($('.3').text() == $playerTwo && $('.5').text() == $playerTwo && $('.7').text() == $playerTwo){
            alert('Player 2 Wins!');
        }
        else if ($('.1').text() == $playerTwo && $('.4').text() == $playerTwo && $('.7').text() == $playerTwo){
            alert('Player 2 Wins!');
        }
        else if ($('.2').text() == $playerTwo && $('.5').text() == $playerTwo && $('.8').text() == $playerTwo){
            alert('Player 2 Wins!');
        }
        else if ($('.3').text() == $playerTwo && $('.6').text() == $playerTwo && $('.9').text() == $playerTwo){
            alert('Player 2 Wins!');
        }
        // else{
        //     alert('It\'s a tie!');
        // }
        }
    winningScenario();

    $('.btn').click(function(){
        $('td').empty();
    })
})

//I tried to get this 
    //if statement and for loop to run through the options of winning scenarios, and account for a tie
    //winning = [[1,2,3] [4,5,6] [7,8,9] [1,5,9] [3,5,7] [1,4,7] [2,5,8] [3,6,9]]
    //if all blocks have been checked, and there is no winner, it's a tie
//     const win = () => {
//     let $winners = [[$('.1').text(),$('.2').text(),$('.3').text()], [$('.4').text(),$('.5').text(),$('.6').text()], 
//          [$('.7').text(),$('.8').text(),$('.9').text()], [$('.1').text(),$('.4').text(),$('.7').text()], 
//          [$('.2').text(),$('.5').text(),$('.8').text()],
//          [$('.3').text(),$('.6').text(),$('.9').text()], [$('.1').text(),$('.5').text(),$('.9').text()], 
//          [$('.3').text(),$('.5').text(),$('.7').text()]];
//     for(let i = 0; i < $winners.length; i++){
//          if($winners[i] == "X");{
//          ('player 1 has won the game');
//         //  alert("Player 1 has won the game!");
//     } if ($winners[i] == "O");
//         //  alert("Player 2 has won the game!");
//          break;
// }
// }
// win();
