// API INFO ONLY CHANGE TOKEN
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {TOKEN HERE}");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// END API TOKEN

const mainContainer = document.querySelector(".mainContainer");
const zipSubmit = document.querySelector(".zipSubmit");

// function capitalizeFirstLetter(name) {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

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