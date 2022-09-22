/* Imports */
import { getBeanies } from './fetch-utils.js';
/* Get DOM Elements */
const cardsSection = document.getElementById('cards-section');
/* State */

/* Events */

window.addEventListener('load', () => {
    findBeanies();
});
/* Display Functions */

async function findBeanies() {
    const response = await getBeanies();
    console.log('response:', response);
    // error = response.error;
    // beanies = response.data;
    // displayBeanies();
}
// (don't forget to call any display functions you want to run on page load!)
