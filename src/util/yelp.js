// Client ID
// 0RyfDT5_lVXcCAonKuk8Og
//
// API Key
// jG-81vgbJb6PKGuBNIjFDPsQfxXSP5ReLFES9HH_jxY09NhQRz9WtSyCqAynu8I0OaSVG27Pn67tBejTz8vY0tSKGpvp1QF6fzaz4Bmb9d3rmD7Ld_TJmIlvvQMUXXYx
const apiKey = 'jG-81vgbJb6PKGuBNIjFDPsQfxXSP5ReLFES9HH_jxY09NhQRz9WtSyCqAynu8I0OaSVG27Pn67tBejTz8vY0tSKGpvp1QF6fzaz4Bmb9d3rmD7Ld_TJmIlvvQMUXXYx';

export let Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response=>{
        return response.json();
    }).then(jsonResponse=>{
      if(jsonResponse.businesses) {
        console.log(jsonResponse.businesses);
        return jsonResponse.businesses.map(business=>{
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            url: business.url
          }
        });
      }
    })
  }
}
