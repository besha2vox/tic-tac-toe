'use strict';

let emptyFields = [];

export default function ai(fields, step) {
    const [
        field1,
        field2,
        field3,
        field4,
        field5,
        field6,
        field7,
        field8,
        field9,
    ] = fields;

    //*>>---------------------|AI first step|---------------------<<

    if (step === 2) {
        if (!field5.classList.contains('clicked')) return 4;
        if (field5.classList.contains('clicked')) {
            let randomNum = Math.floor(Math.random() * 4);
            return [0, 2, 6, 8][randomNum];
        }
    }

    //*>>--------------------|AI steps to win|--------------------<<

    if (
        ((field2.classList.contains('o') && field3.classList.contains('o')) ||
            (field4.classList.contains('o') &&
                field7.classList.contains('o')) ||
            (field5.classList.contains('o') &&
                field9.classList.contains('o'))) &&
        !field1.classList.contains('clicked')
    ) {
        return 0;
    }

    if (
        ((field1.classList.contains('o') && field3.classList.contains('o')) ||
            (field5.classList.contains('o') &&
                field8.classList.contains('o'))) &&
        !field2.classList.contains('clicked')
    ) {
        return 1;
    }

    if (
        ((field1.classList.contains('o') && field2.classList.contains('o')) ||
            (field6.classList.contains('o') &&
                field9.classList.contains('o')) ||
            (field5.classList.contains('o') &&
                field7.classList.contains('o'))) &&
        !field3.classList.contains('clicked')
    ) {
        return 2;
    }

    if (
        ((field1.classList.contains('o') && field7.classList.contains('o')) ||
            (field5.classList.contains('o') &&
                field6.classList.contains('o'))) &&
        !field4.classList.contains('clicked')
    ) {
        return 3;
    }

    if (
        ((field3.classList.contains('o') && field9.classList.contains('o')) ||
            (field4.classList.contains('o') &&
                field5.classList.contains('o'))) &&
        !field6.classList.contains('clicked')
    ) {
        return 5;
    }

    if (
        ((field1.classList.contains('o') && field4.classList.contains('o')) ||
            (field8.classList.contains('o') &&
                field9.classList.contains('o')) ||
            (field5.classList.contains('o') &&
                field3.classList.contains('o'))) &&
        !field7.classList.contains('clicked')
    ) {
        return 6;
    }

    if (
        ((field7.classList.contains('o') && field9.classList.contains('o')) ||
            (field2.classList.contains('o') &&
                field5.classList.contains('o'))) &&
        !field8.classList.contains('clicked')
    ) {
        return 7;
    }

    if (
        ((field1.classList.contains('o') && field5.classList.contains('o')) ||
            (field7.classList.contains('o') &&
                field8.classList.contains('o')) ||
            (field3.classList.contains('o') &&
                field6.classList.contains('o'))) &&
        !field9.classList.contains('clicked')
    ) {
        return 8;
    }

    //*>>------------------|AI step to not lose|------------------<<

    if (
        ((field2.classList.contains('x') && field3.classList.contains('x')) ||
            (field4.classList.contains('x') &&
                field7.classList.contains('x')) ||
            (field5.classList.contains('x') &&
                field9.classList.contains('x'))) &&
        !field1.classList.contains('clicked')
    ) {
        return 0;
    }

    if (
        ((field1.classList.contains('x') && field3.classList.contains('x')) ||
            (field5.classList.contains('x') &&
                field8.classList.contains('x'))) &&
        !field2.classList.contains('clicked')
    ) {
        return 1;
    }

    if (
        ((field1.classList.contains('x') && field2.classList.contains('x')) ||
            (field6.classList.contains('x') &&
                field9.classList.contains('x')) ||
            (field5.classList.contains('x') &&
                field7.classList.contains('x'))) &&
        !field3.classList.contains('clicked')
    ) {
        return 2;
    }

    if (
        ((field1.classList.contains('x') && field7.classList.contains('x')) ||
            (field5.classList.contains('x') &&
                field6.classList.contains('x'))) &&
        !field4.classList.contains('clicked')
    ) {
        return 3;
    }

    if (
        ((field3.classList.contains('x') && field9.classList.contains('x')) ||
            (field4.classList.contains('x') &&
                field5.classList.contains('x'))) &&
        !field6.classList.contains('clicked')
    ) {
        return 5;
    }

    if (
        ((field1.classList.contains('x') && field4.classList.contains('x')) ||
            (field8.classList.contains('x') &&
                field9.classList.contains('x')) ||
            (field5.classList.contains('x') &&
                field3.classList.contains('x'))) &&
        !field7.classList.contains('clicked')
    ) {
        return 6;
    }

    if (
        ((field7.classList.contains('x') && field9.classList.contains('x')) ||
            (field2.classList.contains('x') &&
                field5.classList.contains('x'))) &&
        !field8.classList.contains('clicked')
    ) {
        return 7;
    }

    if (
        ((field1.classList.contains('x') && field5.classList.contains('x')) ||
            (field7.classList.contains('x') &&
                field8.classList.contains('x')) ||
            (field3.classList.contains('x') &&
                field6.classList.contains('x'))) &&
        !field9.classList.contains('clicked')
    ) {
        return 8;
    }

    //*>>------------------|AI step for step (random)|------------------<<

    emptyFields = emptyFieldsFilter(fields);
    return emptyFields[randomaizerForAI()];
}

function emptyFieldsFilter(fields) {
    return [...fields].reduce((acc, field, i) => {
        if (!field.classList.contains('clicked')) acc.push(i);
        return acc;
    }, []);
}

function randomaizerForAI() {
    console.log('emptyFields.length', emptyFields.length);
    return Math.floor(Math.random() * emptyFields.length);
}
