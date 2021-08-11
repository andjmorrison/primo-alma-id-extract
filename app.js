javascript: (() => {
    let ids = document.getElementsByClassName("list-item-primary-content");
    let titles = document.getElementsByClassName("item-title");

    Object.keys(ids).map(function(e, i) {
        let dataId = ids[i].getAttribute('data-recordID');
        console.log('dataId: ', dataId)
        let dataTitle = titles[i].firstElementChild.innerText;

        let system = dataId.match(/[a-zA-Z]?_*/g).join('').replaceAll('_', ' ').toUpperCase();
        console.log('system: ', system)
        let id = dataId.match(/[0-9]/g).join('');
        
        let listItemArray = document.getElementsByClassName('result-item-details');
        
        let systemNode = document.createElement('H3');
        systemNode.setAttribute('style','color:red');
        systemNode.style.textAlign = 'center'; 
        let systemTextNode = document.createTextNode(`SYSTEM: ${system}`);
        systemNode.appendChild(systemTextNode);
        listItemArray[i].appendChild(systemNode);

        let idNode = document.createElement('H3');
        idNode.setAttribute('style', 'color:red');
        idNode.style.textAlign = 'center';
        let idTextNode = document.createTextNode(`MMSID: ${id}`);
        idNode.appendChild(idTextNode);
        listItemArray[i].appendChild(idNode);
    });
})();