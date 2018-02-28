const url = 'http://localhost:3000/parks'
const page = document.querySelector('.row')

function newItem(item){
    return document.createElement(item)
}
function appendToPage(parent, element){
    return parent.appendChild(element)
}

function findParks() {
    fetch(url, {
     method: 'GET'   
    }).then(response => {
        return response.json()
    }).then(response => {
        response.map(current => {
            let parkCard = newItem('div')
            parkCard.className = 'col-md-4'
            appendToPage(page, parkCard)

            let parkName = newItem('h1')
            parkName.textContent = current.park
            appendToPage(parkCard, parkName)

            let parkState = newItem('p')
            parkState.textContent = current.state
            appendToPage(parkCard, parkState)

            let parkImage = newItem('img')
            parkImage.src = current.image
            parkImage.className = 'park-image'
            appendToPage(parkCard, parkImage)
        })
    })
}
findParks()