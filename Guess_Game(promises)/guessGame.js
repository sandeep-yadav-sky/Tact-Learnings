
let total_points = 0;
function startGame()
{
    this.total_points = 0;
    nextTurn();
};

function nextTurn()
{
    let random_number = generateRandomNumber();
    inputNumberPromise().then((input_number) => {
        assignpoints(random_number,input_number);
    }).catch((error)=> alert(error)).finally(()=>{
        GameToBeContinued().then(()=>{
            nextTurn();
        }).catch(()=>{
            endGame();
        });
    })
}


function generateRandomNumber()
{
    return Math.floor(Math.random() * 10 + 1);
}


function inputNumberPromise()
{
    return new Promise((resolve, reject) => {
        const input_number = Number(window.prompt("Enter a number (1 - 10):"));
        if (isNaN(input_number)|| input_number<1 || input_number>10)
        {
            reject(new Error("Wrong Input Type"));
        }
        else
        {
            resolve(input_number);
        }
})
};


function assignpoints(random_number,input_number)
{
    let points_to_be_added = 0; 
    if(Math.abs(random_number-input_number)===0)
        points_to_be_added = 2;
    else if(Math.abs(random_number-input_number)===1)
        points_to_be_added = 1;
    
    this.total_points += points_to_be_added;
    alert(`you are awarded ${points_to_be_added} since random number was ${random_number} and you entered ${input_number}`);

};


function GameToBeContinued()
{
    return new Promise((resolve,reject)=>{
        if (window.confirm("Do you want to continue?")) {
            resolve(true);
          } else {
            reject(false);
          }
    });
}

function displayTotalPoints()
{
    alert(`you have earned total ${total_points}`);
    return;
}

function endGame()
{
    displayTotalPoints();
    alert('Game Finisheed');
    return;
}