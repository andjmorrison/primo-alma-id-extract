javascript: (() => {
    let ids = document.getElementsByClassName("list-item-primary-content");
    let titles = document.getElementsByClassName("item-title");

    Object.keys(ids).map(function(e, i) {
        let dataId = ids[i].getAttribute('data-recordID');
        let dataTitle = titles[i].firstElementChild.innerText;

        let system = dataId.match(/[a-zA-Z]/g).join('');
        let id = dataId.match(/[0-9]/g).join('');
        
        let listItemArray = document.getElementsByClassName('list-item');

        
        let systemNode = document.createElement('H3');
        systemNode.setAttribute('style','color:red');
        systemNode.style.textAlign = 'center'; 
        let systemTextNode = document.createTextNode(`System: ${system}`);
        systemNode.appendChild(systemTextNode);
        listItemArray[i].appendChild(systemNode);

        
        let idNode = document.createElement('H3');
        idNode.setAttribute('style', 'color:red');
        idNode.style.textAlign = 'center';
        let idTextNode = document.createTextNode(`MMSid: ${id}`);
        idNode.appendChild(idTextNode);
        listItemArray[i].appendChild(idNode);
    });
})();