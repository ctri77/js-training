'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {

    const description = str.split(" ");   
    for (let i=0;i<description.length;i++) {
      description[i] = description[i].charAt(0).toUpperCase() + description[i].substr(1);
    }
    return description.join(" ");

}

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(jadenCase('How are you ?'), 'How Are You ?')

// End of tests */
