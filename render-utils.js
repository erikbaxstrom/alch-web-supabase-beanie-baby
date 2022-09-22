export function renderBeanie(beanie) {
    let div = document.createElement('div');
    const p = document.createElement('p');
    p.innerHTML = 'I am beans';
    div.append(p);
    return div;
}
