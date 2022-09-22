export function renderBeanie(beanie) {
    let div = document.createElement('div');
    div.classList.add('card');
    const img = document.createElement('img');
    img.src = beanie.image;
    div.append(img);
    const title = document.createElement('h2');
    title.textContent = beanie.title;
    div.append(title);
    const p1 = document.createElement('p');
    p1.textContent = `Animal: ${beanie.animal}`;
    console.log('first', p1);
    div.append(p1);
    const p2 = document.createElement('p');
    p2.textContent = `Subtheme: ${beanie.subtheme}`;
    console.log('second', p2);
    div.append(p2);
    const p3 = document.createElement('p');
    p3.textContent = `Sign: ${beanie.astroSign}`;
    div.append(p3);
    const p4 = document.createElement('p');
    p4.textContent = `Released: ${beanie.releaseYear}`;
    div.append(p4);

    return div;
}
