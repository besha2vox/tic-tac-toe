'use strict';

let emptyFields = [];
let indx = 0;

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

    //*>>-----------|AI can't lose if he takes this step |--------<<

    // if (
    //     step === 2 &&
    //     (field1.classList.contains('x') ||
    //         field3.classList.contains('x') ||
    //         field7.classList.contains('x') ||
    //         field9.classList.contains('x'))
    // ) {
    //     return indxForEmptyEdgeFields([field2, field4, field6, field8]);
    // }

    if (step === 2) {
        if (field1.classList.contains('x'))
            return indxForEmptyEdgeFields([field2, field4]);
        if (field3.classList.contains('x'))
            return indxForEmptyEdgeFields([field2, field6]);
        if (field7.classList.contains('x'))
            return indxForEmptyEdgeFields([field4, field8]);
        if (field9.classList.contains('x'))
            return indxForEmptyEdgeFields([field6, field8]);
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
        ((field1.classList.contains('o') && field9.classList.contains('o')) ||
            (field3.classList.contains('o') &&
                field7.classList.contains('o'))) &&
        !field5.classList.contains('clicked')
    ) {
        return 4;
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
        ((field1.classList.contains('x') && field9.classList.contains('x')) ||
            (field3.classList.contains('x') &&
                field7.classList.contains('x'))) &&
        !field5.classList.contains('clicked')
    ) {
        return 4;
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

    if (
        ((field1.classList.contains('x') && field9.classList.contains('x')) ||
            (field3.classList.contains('x') &&
                field7.classList.contains('x'))) &&
        field5.classList.contains('clicked') &&
        field5.classList.contains('clicked') &&
        [field2, field4, field6, field8].some(
            (field) => !field.classList.contains('clicked')
        )
    ) {
        return indxForEmptyEdgeFields([field2, field4, field6, field8]);
    }

    //*>>------------------|AI step for step (random)|------------------<<

    emptyFields = emptyCornerFields([field1, field3, field5, field7, field9]);
    indx = emptyFields[randomaizerForAI()];

    if (indx !== undefined) return indx;

    emptyFields = emptyFieldsFilter(fields);
    return emptyFields[randomaizerForAI()];
}

function emptyFieldsFilter(fields) {
    return [...fields].reduce((acc, field, i) => {
        if (!field.classList.contains('clicked')) acc.push(i);
        return acc;
    }, []);
}

function indxForEmptyEdgeFields(fields) {
    emptyFields = emptyEdgeFields(fields);
    indx = emptyFields[randomaizerForAI()];

    return indx;
}

function emptyEdgeFields(fields) {
    return fields.reduce((acc, field, i) => {
        if (!field.classList.contains('clicked')) acc.push([1, 3, 5, 7][i]);
        return acc;
    }, []);
}

function emptyCornerFields(fields) {
    return fields.reduce((acc, field, i) => {
        if (!field.classList.contains('clicked')) acc.push([0, 2, 4, 6, 8][i]);
        return acc;
    }, []);
}

function randomaizerForAI() {
    return Math.floor(Math.random() * emptyFields.length);
}
