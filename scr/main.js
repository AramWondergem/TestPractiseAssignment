
//-----functie-----

// Je moet gebruik maken van de eerste parameter!

function pepernotenFabriek(string,numberOfPepernoten) {
    // pepernoten  notpepener

    const firstPart = string.slice(3,6);
    const secondPart = string.slice(8,);
    const thirdPart = string.charAt(0);
    let fourthPart = "";
    for (let i = 0; i < 2; i++) {
        fourthPart += string.charAt(1)
    }
    const fifthPart = string.charAt(2);

    const onverpaktePepernoot = firstPart + secondPart + thirdPart + fourthPart +fifthPart;

    onverpaktePepernoot.toUpperCase();

    const pepernotenZak = new Array();

    for (let i = 0; i < numberOfPepernoten.charCodeAt(0); i++) {

        pepernotenZak.push(onverpaktePepernoot)

    }

    pepernotenZak.map((pepernoot) => {
        console.log(pepernoot)
    } )
    return pepernotenZak
}

module.exports = {
    pepernotenFabriek,
}