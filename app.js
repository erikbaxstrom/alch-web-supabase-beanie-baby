/* Imports */
import { getBeanies } from './fetch-utils.js';
import { renderBeanie } from './render-utils.js';
/* Get DOM Elements */
const cardSection = document.getElementById('card-section');
/* State */
let beanies = [];
let error = null;
let beanieSigns = [];
/* Events */

window.addEventListener('load', () => {
    findBeanies();
});

async function findBeanies() {
    const response = await getBeanies();
    // console.log('response:', response);
    error = response.error;
    beanies = response.data;
    displayBeanies();
}
/* Display Functions */

function displayBeanies() {
    cardSection.innerHTML = '';
    for (let beanie of beanies) {
        const beanieEl = renderBeanie(beanie);
        cardSection.append(beanieEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
