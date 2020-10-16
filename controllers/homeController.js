window.onload = async () => {
    let baconIspum;
    try {
        baconIspum = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=4');
        baconIspum = await baconIspum.json();
    } catch (e) {
        console.error(e);
        return;
    }

    let names = [];
    baconIspum.forEach((ispum) => {
        let splitIspum = ispum.split(' ');
        splitIspum[1] = splitIspum[1].substr(0, 1).toUpperCase() + splitIspum[1].substr(1);
        names.push(splitIspum[0] + ' ' + splitIspum[1]);
    });

    let iconUrls = [];
    try {
        for (const name of names) {
            let iconRequest = await fetch(`https://api.kwelo.com/v1/media/identicon/${name}?format=base64`);
            iconUrls.push(await iconRequest.text());
        }
    } catch (e) {
        console.error(e);
    }

    let itemList = document.getElementById('category-item-list');
    let tabContent = document.getElementsByClassName('tab-content')[0];
    for (let i = 0; i < baconIspum.length; i++) {
        itemList.appendChild(createListItem(names[i]));
        tabContent.appendChild(createItemTab(names[i], baconIspum[i], iconUrls[i]));
    }
}

function createListItem(name) {
    let item = document.createElement('LI');
    item.className = 'nav-item';

    let link = document.createElement('A');
    link.className = 'nav-link';
    link.setAttribute('data-toggle', 'tab');
    link.href = `#${name.split(' ').join('')}`;
    link.appendChild(document.createTextNode(name));
    item.appendChild(link);

    return item
}

function createItemTab(name, ispum, iconUrl) {
    let item = document.createElement("DIV");
    item.id = name.split(' ').join('');
    item.className = 'tab-pane fade';

    let header = document.createElement('H3');
    header.appendChild(document.createTextNode(name));
    item.appendChild(header);

    let text = document.createElement('P');
    text.appendChild(document.createTextNode(ispum));
    item.appendChild(text);

    let image = document.createElement('IMG');
    image.setAttribute('src', iconUrl);
    item.appendChild(image);

    return item;
}