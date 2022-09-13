export interface Card {
    id: string,
    description: string,
    img: string
}

const uniqueCards: Card[] = [
    {img: "01.jpg", description: "card 1", id: "card1"},
    {img: "02.jpg", description: "card 2", id: "card2"},
    {img: "03.jpg", description: "card 3", id: "card3"},
    {img: "04.jpg", description: "card 4", id: "card4"},
    {img: "05.jpg", description: "card 5", id: "card5"},
    {img: "06.jpg", description: "card 6", id: "card6"},
    {img: "07.jpg", description: "card 7", id: "card7"},
    {img: "08.jpg", description: "card 8", id: "card8"}
]

const originCards: Card[] = []

function shuffleCards(min: number, max: number){
    const n = Math.random() * (max - min + 1) + min
    return parseInt(n.toString())
}

uniqueCards.forEach(card => {
    originCards.push({...card})
    originCards.push({...card})
})

let randomCards: Card[] = []

const len = originCards.length

while(randomCards.length < len){
    let shuflled = shuffleCards(0, originCards.length - 1)
    const item = originCards.splice(shuflled, 1)
    randomCards.push(item[0])
}

/* randomCards = originCards.sort((a,b) => {
    return Math.random() - 0.5
}) */

export {randomCards}
