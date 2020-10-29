window.onload = async () => {
    let items = [];

    try {
        let baconIpsum = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=4');
        baconIpsum = await baconIpsum.json();
        baconIpsum.forEach((ipsum) => {
            items.push({
                body: ipsum
            });
        })
    } catch (e) {
        console.error(e);
        return;
    }

    await Promise.all(items.map(async (item) => {
        let splitIpsum = item.body.split(' ');
        splitIpsum[1] = splitIpsum[1].substr(0, 1).toUpperCase() + splitIpsum[1].substr(1);
        item.name = splitIpsum[0] + ' ' + splitIpsum[1];

        try {
            let iconRequest = await fetch(`https://api.kwelo.com/v1/media/identicon/${item.name}?format=base64`);
            item.iconUrl = await iconRequest.text();
        } catch (e) {
            console.error(e);
        }

        item.listElement = createListElement(item);
        item.tabElement = createTabElement(item);
    }));

    items.sort((a, b) => {
        return a.name > b.name ? 1 : -1
    });

    let itemList = document.getElementById('itemList');
    let tabContent = document.getElementById('selectedItem');
    items.forEach((item) => {
        itemList.appendChild(item.listElement);
        tabContent.appendChild(item.tabElement);
    });

    document.getElementById('itemListFilter')
        .addEventListener('keyup', createItemFilterListener(items), true);
}

function createListElement(item) {
    let itemElement = document.createElement('LI');
    itemElement.className = 'nav-item';

    let linkElement = document.createElement('A');
    linkElement.className = 'nav-link';
    linkElement.setAttribute('data-toggle', 'tab');
    linkElement.href = `#${item.name.split(' ').join('')}`;
    linkElement.appendChild(document.createTextNode(item.name));
    itemElement.appendChild(linkElement);

    return itemElement;
}

function createTabElement(item) {
    let itemElement = document.createElement("DIV");
    itemElement.id = item.name.split(' ').join('');
    itemElement.className = 'tab-pane fade';

    let headerElement = document.createElement('H3');
    headerElement.appendChild(document.createTextNode(item.name));
    itemElement.appendChild(headerElement);

    let textElement = document.createElement('P');
    textElement.appendChild(document.createTextNode(item.body));
    itemElement.appendChild(textElement);

    let imageElement = document.createElement('IMG');
    imageElement.setAttribute('src', item.iconUrl);
    itemElement.appendChild(imageElement);

    return itemElement;
}

function createItemFilterListener(itemList) {
    return (event) => {
        let filterString = event.currentTarget.valueOf().value;
        console.log(filterString);
        itemList.forEach((item) => {
            if (filterString.length === 0 || (
                    item.name.length >= filterString.length && item.name.includes(filterString))) {
                item.listElement.style.display = 'block';
            } else {
                item.listElement.style.display = 'none';
            }
        });
    }
}