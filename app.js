/* Imports */
import { getBeanies, getSigns } from './fetch-utils.js';
import { renderBeanie, renderSign } from './render-utils.js';
/* Get DOM Elements */
const cardSection = document.getElementById('card-section');
const signSelect = document.getElementById('sign-select');
const searchForm = document.getElementById('search-form');

/* State */
let beanies = [];
let error = null;
let beanieSigns = [];
/* Events */

window.addEventListener('load', async () => {
    findBeanies();
    const signsResponse = await getSigns();
    beanieSigns = signsResponse.data;
    // console.log('beanieSigns:', beanieSigns);
    displaySignsOptions();
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    const name = formData.get('name');
    const searchSign = formData.get('sign');
    // console.log('searchSign', searchSign);
    findBeanies(name, searchSign);
});

async function findBeanies(name, searchSign) {
    const response = await getBeanies(name, searchSign);
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

async function displaySignsOptions() {
    // console.log('beanieSigns:', beanieSigns);
    for (const sign of beanieSigns) {
        // console.log('sign', sign);
        const signEl = renderSign(sign);
        signSelect.append(signEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
