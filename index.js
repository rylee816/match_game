document.addEventListener("DOMContentLoaded", () => {

    //card options
    const cardArray = [
        {
            name: "img1",
            img : "images/IMG_1.jpg"
        },
        {
            name: "img1",
            img : "images/IMG_1.jpg"
        },
        {
            name: "img2",
            img : "images/IMG_2.jpg"
        }, 
        {
            name: "img2",
            img : "images/IMG_2.jpg"
        },
        {
            name: "img3",
            img : "images/IMG_3.jpg"
        },
        {
            name: "img3",
            img : "images/IMG_3.jpg"
        },
        {
            name: "img4",
            img : "images/IMG_4.jpg"
        },
        {
            name: "img4",
            img : "images/IMG_4.jpg"
        },
        {
            name: "img5",
            img : "images/IMG_5.jpg"
        },
        {
            name: "img5",
            img : "images/IMG_5.jpg"
        },
        {
            name: "img6",
            img : "images/IMG_6.jpg"
        },
        {
            name: "img6",
            img : "images/IMG_6.jpg"
        },
        {
            name: "img7",
            img : "images/IMG_7.jpg"
        },
        {
            name: "img7",
            img : "images/IMG_7.jpg"
        },
        {
            name: "img8",
            img : "images/IMG_8.jpg"
        },
        {
            name: "img8",
            img : "images/IMG_8.jpg"
        },

    ];

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let mistakes = 0;

    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            let card = document.createElement("img");
            card.setAttribute("src", "images/blank.png")
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card)
        }
    };

    //check for matches

    function checkForMatch(){
        let cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert("You found a match!")
            // cards[optionOneId].style.display = "none";
            // cards[optionTwoId].style.display = "none";
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute("src", "images/blank.png")
            cards[optionTwoId].setAttribute("src", "images/blank.png")
            mistakes += 1;
            let triesLeft = 10 - mistakes;
            document.querySelector("#mistakes").innerHTML = " " + triesLeft;
            document.querySelector("#mistakes").style.color = "red";
            if(mistakes === 10){
                alert("You lose! You get NOTHING! Good DAY sir!")
                location.reload()
            } else {
                alert("Sorry, try again!")
            }
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = " Congratulations! You found them all!";
            resultDisplay.style.color = "lime";
        }
    }

    //flip card
    function flipCard(){
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId)
        this.style.transform = "rotateY(180deg)"
        this.style.transition = "transform .2s ease-in"
        this.setAttribute("src", cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})