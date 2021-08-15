import blank from "/images/blank.png";
import img1 from "/images/IMG_1.jpg"
import img2 from "/images/IMG_2.jpg"
import img3 from "/images/IMG_3.jpg"
import img4 from "/images/IMG_4.jpg"
import img5 from "/images/IMG_5.jpg"
import img6 from "/images/IMG_6.jpg"
import img7 from "/images/IMG_7.jpg"
import img8 from "/images/IMG_8.jpg"

document.addEventListener("DOMContentLoaded", () => {

    //card options
    const cardArray = [
        {
            name: "img1",
            img : img1,
            selected: false
        },
        {
            name: "img1",
            img : img1,
            selected: false
        },
        {
            name: "img2",
            img : img2,
            selected: false
        }, 
        {
            name: "img2",
            img : img2,
            selected: false
        },
        {
            name: "img3",
            img : img3,
            selected: false
        },
        {
            name: "img3",
            img : img3,
            selected: false
        },
        {
            name: "img4",
            img : img4,
            selected: false
        },
        {
            name: "img4",
            img : img4,
            selected: false
        },
        {
            name: "img5",
            img : img5,
            selected: false
        },
        {
            name: "img5",
            img : img5,
            selected: false
        },
        {
            name: "img6",
            img : img6,
            selected: false
        },
        {
            name: "img6",
            img : img6,
            selected: false
        },
        {
            name: "img7",
            img : img7,
            selected: false
        },
        {
            name: "img7",
            img : img7,
            selected: false
        },
        {
            name: "img8",
            img : img8,
            selected: false
        },
        {
            name: "img8",
            img : img8,
            selected: false
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
            card.setAttribute("src", blank)
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
            cardsWon.push(cardsChosen);
        } else {
            setTimeout(() => {
                cards[optionOneId].setAttribute("src", blank)
                cards[optionTwoId].setAttribute("src", blank)
            }, 2000)
            mistakes += 1;
            let triesLeft = 10 - mistakes;
            document.querySelector("#mistakes").innerHTML = " " + triesLeft;
            document.querySelector("#mistakes").style.color = "red";
            if(mistakes === 10){
                alert("You lose! You get NOTHING! Good DAY sir!")
                location.reload()
            } else {
                setTimeout(() => {
                    alert("Sorry, try again!") 
                }, 500)
            }
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2){
            resultDisplay.textContent = " Congratulations! You found them all!";
            resultDisplay.style.color = "lime";
        }
    }

    //flip card
    function flipCard(){
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);

        cardArray[cardId].selected = true;

        cardsChosenId.push(cardId)
        this.style.transform = "rotateY(180deg)"
        this.style.transition = "all .4s ease-in"
        this.setAttribute("src", cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})