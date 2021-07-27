function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++)
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
return cards
}

writeCards(["Lisa", "Kaitlin", "Jan"], "suprise")



function countDown() {
    let countdown = 10;
    while (countdown > 0 ) {
      console.log(countdown);
      countdown -= 1;
    }
    console.log(countdown);
  }