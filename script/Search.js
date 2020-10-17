class Search {
    constructor(searchValue) {
        this.search = searchValue;
    }

    searchCard(searchValue, arr) {
        arr.forEach(element => {
            cardContainer.removeChild(element);
            if (element.textContent.includes(searchValue)) {
                return cardContainer.appendChild(element);
            } 
        })
    }
}