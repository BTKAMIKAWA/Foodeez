var uri = 'https://opentable.herokuapp.com/api/restaurants?';
var cvalue = 'us';
var page = 1;


function restaurantSelectPage(form) {
    page = form.page.value;
    alert(page)
    getRestaurants();

}

function getRestaurants() {
   
    add = (uri + 'country' + '=' + cvalue + '&page=' + page);
    console.log(page);
    fetch(add)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            _displayRestaurants(myJson);
        });
}


function _displayCount(restaurantCount) {
    const name = (restaurantCount === 1) ? 'restaurant' : 'restaurants';

    document.getElementById('counter').innerText = `${restaurantCount} ${name}`;
}



function _displayRestaurants(myJson) {
    const restaurant = document.getElementById('root');
    const container = document.createElement('div');
    container.setAttribute('class', 'container1');

    restaurant.appendChild(container);

    _displayCount(myJson.restaurants.length);

    
    for (let r = 0; r < myJson.restaurants.length; r++)
    {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const image = document.createElement("img");
        image.setAttribute('src', myJson.restaurants[r].image_url);

        const nameLink = document.createElement("a");
        nameLink.setAttribute('href', myJson.restaurants[r].image_url);
        nameLink.setAttribute('class', 'name');
        nameLink.innerText = myJson.restaurants[r].name;

        const address = document.createElement("h4");
        address.setAttribute('class', 'address');
        address.textContent = myJson.restaurants[r].address;

        const city = document.createElement("h4");
        city.setAttribute('class', 'city');
        city.textContent = `${myJson.restaurants[r].city}, ${myJson.restaurants[r].state} ${myJson.restaurants[r].postal_code}`;

        const phone = document.createElement("h4");
        

        let formatPhoneNumber = (phone) => {
            //Filter only numbers from the input
            let cleaned = ('' + phone).replace(/\D/g, '');

            //Check if the input is of correct length
            let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3]
            };

            return null
        };

        phone.setAttribute('class', 'phone');
        phone.textContent = (formatPhoneNumber(myJson.restaurants[r].phone));

        container.appendChild(card);
        card.appendChild(image);
        card.appendChild(nameLink);
        card.appendChild(address);
        card.appendChild(city);
        
        card.appendChild(phone);

        //var brk = document.createElement("br");
        //restaurant.appendChild(brk);

        

        

        


      

       

      


      
    };

    restaurants = myJson;
}