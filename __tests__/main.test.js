const {pepernotenFabriek} = require('../scr/main');


test('The pepernoten fabriek maakt pepernotenzakken met pepernoten erin', () => {
    //arrange

    const firstParameter = "notpepener";
    const secondParameter = "a"


    //act
    const pepernotenZak = pepernotenFabriek(firstParameter,secondParameter);

    //assert

    expect(pepernotenZak.length).toBe(97);


    let checkAllEntries = false;

    for (let i = 0; i < pepernotenZak.length; i++) {
        if (pepernotenZak.at(i) === "pepernoot") {
            checkAllEntries = true;
        } else {
            checkAllEntries = false;
            break
        }
    }

    expect(checkAllEntries).toBe(true);
})





