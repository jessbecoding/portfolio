# Pawsibility Front End Project
Pawsibility is a pet finder app that allows you to search adoptable pets and shelters by zipcode. I was inspired to do this because I was in the middle of my own pet search. 

To make the app, I used HTML, JavaScript, CSS, and Tailwind CSS. I also utilized Postman and of course, the Petfinder API. I learned a lot, including how to use the question mark turnery operator in JavaScript as the Petfinder API was inconsistent in where it stored data like photos. I learned to use the elements section of the developer tools in Chrome to test CSS formatting.


I decided on the Petfinder API because it seemed to most robust of the options I had. There was a ton of information to use and manipulate on the page. Tailwind was something I really wanted to try because I struggle with CSS. I wanted to make sure the project was a well rounded representation of what I’ve learned since November, so I used a little custom CSS to showcase that as well.

# Challenges
The first big challenge was simply accessing the API. I was more familiar with using an API key to access the database, but Petfinder’s API utilizes an API key and an access token. Once I was able to get a tab in Postman set up where all I needed to do was send and it would populate the bearer token, it was much smoother sailing. Then, I was having issues getting images on the screen. The API was returning null on most of all the photos. That seemed the be a problem with the API as simply waiting saw the return of the image links. Still, there was a lot of inconsistency surrounding where the photo URLS were stored in the API. There was a ‘photo’ section as well as a ‘primary_photo_cropped’ section to pull from. This is where the turnery operator came in handy. I was able to set an alternate 404 image so there would at least be something there rather than a broken image icon. If I had more time, I’d play with that turnery more and see if I could add a second option to pull from before the error image displays. 

# Getting Started
1.	Navigate to the <a href= "https://www.petfinder.com/developers/">Petfinder API</a> and click the “Get An API Key” button
2.	Create an account
3.	Once account is created, you can click “For Developers”
4.	Fill out the details of your project and what context you’ll be using the API for (personal, business, school, etc.) and click “Request a Key”
5.	The API key will display on the next page along with a “secret.” This is used to request private information, which I won’t go into as this project is focused on the frontend. You will need this secret to set up Postman for the bearer token. 
6.	If you haven’t already, install <a href="https://www.postman.com/downloads/">Postman</a>.
7.	Create a new request to match this screen shot (type in your own client ID (API Key) and secret:

<img src = ".\PostmanScreenShot.png">

8.	Click send and you should see an access token appear in the terminal (Note: This token expires every hour)

# HTML
I started by hard coding the elements in the Search Pets page. I created an input field, a button, and containers for everything. Then I linked the CSS and Tailwind CSS to the HTML. 

# JavaScript
The JavaScipt for the Search Pet and Search Shelter page are very similar, so I'll speak broadly here. First, I linked the API to the JS file. 
```var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {TOKEN HERE}");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
```
Then it was time to access the containers I made in the HTML page.
```const mainContainer = document.querySelector(".mainContainer");
const zipSubmit = document.querySelector(".zipSubmit");
```
After that, it was just a matter of writing the logic for the search function, shown below
```
const searchPetsByZip = async () => {
    const petCardContainer = document.querySelector(".petCardContainer");
    petCardContainer.innerHTML = "";
    const zipInput = document.querySelector(".zipInput")
    const petZipURL = `https://api.petfinder.com/v2/animals/?location=${zipInput.value}`;
    const petData = await fetch(petZipURL, requestOptions);
    const json = await petData.json();
    jsonHome = json.animals;
    zipInput.value = null;
    
    
    jsonHome.forEach(animal => {
        const petCard = document.createElement("div");
        petCard.className = "petCard";
        const petPhoto = document.createElement("img");
        petPhoto.className = "petPhoto";
        petPhoto.src = animal?.primary_photo_cropped?.small ? animal?.primary_photo_cropped?.small: "https://st2.depositphotos.com/12093440/44102/v/950/depositphotos_441020378-stock-illustration-page-404-link-to-non.jpg";
        
        const petName = document.createElement("h1");
        petName.className = "petName";
        petName.innerText = animal.name;
        // capitalizeFirstLetter(petName);
        petCard.append(petName, petPhoto);
        petCardContainer.append(petCard);
        mainContainer.append(petCardContainer)        
    });
}

zipSubmit.addEventListener("click",searchPetsByZip);
```
If you wanted to try this for yourself and access different information within the API, I reccommend taking a look at the API support docs <a href="https://www.petfinder.com/developers/v2/docs/">here</a> and using the above as a guide.

# CSS and Tailwind CSS
I started with Tailwind on the landing page. I followed this handy <a href="https://www.youtube.com/watch?v=dFgzHOX84xQ&t=1983s">tutorial</a> that was shared by a classmate, and tried to make it my own.

The custom CSS was very simple. I tried to focus on grid and flex as those seem to be my greatest areas of opportunity. It was definitely a challenge but, I found the elements section of the developer tools in chrome very helpful.

For the color scheme, I used <a href="https://imagecolorpicker.com/en">Image Color Picker</a> and a free 404 image I found online as inspiration. That got me this color pallet:
<img src = ".\Palette.png">
Hex codes are below:

```
rose-fog: #e3c4ac;
armadillo: #393932;
merino: #f7f1e7;
tapa: #7d766d;
lemon-grass: #99a093;
natural-gray: #8a8681;
parchment: #f2e5d1;
roman-coffee: #755b4a;
```

# Thank you!
Thanks so much for reading and taking a look at this project. I wrote a Medium article about it <a href="https://medium.com/@jessbecoding/theres-a-pawsibility-c6acf006d5bc">here</a>. I actually was able to adopt a dog in the middle of this, bonus picture of Millie for tax:</br>
<img src = ".\millie.jpg" width="300">

