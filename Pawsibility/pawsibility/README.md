<h1>Pawsibility</h1>
<img src=".\src\assets\logos\Pawsibility.png">
<h2>About</h2>
Pawsibility is a pet finder app that allows you to search adoptable pets by zipcode. You can also filter by animal type and distance, as well as add pets to a favorites list. I was inspired to do this because I recently went through this looking for my new puppy, Millie.

To make the app, I used JavaScript, CSS, React, and Redux. I also utilized Postman and of course, the Petfinder API. I decided to revamp this project because I wanted to do so much more with it last time, and I loved the idea of being familiar with the API.

<h2>Challenges</h2>
With the API set up already, the biggest obstacle I faced was passing state. I found it pretty easy to get lost with the multiple states I was working with. File structure was also an issue. I had decided to make the hamburger component seperately and I think this is what prevented me from hiding the menu on click in mobile. Aside from state, styling is always by biggest challenge. I'm quite proud of what I was able to produce here in vanilla CSS, and I'm glad I decided to stretch myself in this way.

<h2>Getting Started</h2>
In order to run this app, you will need:
<ul>
<li><a href="https://reactjs.org/docs/getting-started.html">React</a></li>
<li><a href="https://vitejs.dev/guide/">Vite</a></li>
<li><a href="https://www.npmjs.com/package/redux">Redux</a></li>
<li><a href="https://reactrouter.com/en/main/start/tutorial">React Router Dom</a></li>
<li><a href="https://react-select.com/home">React Select</a></li>
<li><a href="https://www.npmjs.com/package/react-toastify?activeTab=readme">React Toastify</a></li>
<li><a href="https://fontawesome.com/v5/docs/web/use-with/react">Font Awesome</a></li>
<li><a href="https://www.petfinder.com/developers/">Pet Finder API Key</a></li>
</ul>
<ol>
<li>Navigate to the <a href= "https://www.petfinder.com/developers/">Petfinder API</a> and click the “Get An API Key” button</li>
<li>Create an account</li>
<li>Once account is created, you can click “For Developers”</li>
<li>Fill out the details of your project and what context you’ll be using the API for (personal, business, school, etc.) and click “Request a Key”</li>
<li>The API key will display on the next page along with a “secret.” This is used to request private information, which I won’t go into as this project is focused on the frontend. You will need this secret to set up Postman for the bearer token. </li>
<li>If you haven’t already, install <a href="https://www.postman.com/downloads/">Postman</a>.</li>
<li>Create a new request to match this screen shot (type in your own client ID (API Key) and secret:
<br>
<img src = ".\src\assets\readme\PostmanScreenShot.png"></li>
<br>
<li>Click send and you should see an access token appear in the terminal (Note: This token expires every hour)</li></ol>

<h2>CSS</h2>
The app was built completely with custom CSS. I used <a href="https://www.canva.com/">Canva</a> to create a theme and logo. I used <a href="https://fonts.google.com/share?selection.family=Belleza|Gloock|Suranna">Google Fonts</a> for the text styles.
<br>
<img src=".\src\assets\readme\Palette.png"><img src=".\src\assets\readme\fonts.png">
<br>
<h2>Thank you!</h2>
