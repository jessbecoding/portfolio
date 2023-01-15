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

const searchShelterByZip = async () => {
    const shelterCardContainer = document.querySelector(".shelterCardContainer");
    // shelterCardContainer.innerHTML = "";
    const zipInput = document.querySelector(".zipInput")
    const shelterZipURL = `https://api.petfinder.com/v2/organizations?location=${zipInput.value}`;
    const shelterData = await fetch(shelterZipURL, requestOptions);
    const json = await shelterData.json();
    jsonHome = json.organizations;
    zipInput.value = null;
    
    jsonHome.forEach(shelter => {
        const shelterCard = document.createElement("div");
        shelterCard.className = "shelterCard";
        const shelterName = document.createElement("a");
        shelterName.className = "shelterName";
        shelterName.innerText = shelter.name;
        shelterName.href = shelter.url;
        shelterCard.append(shelterName);
        shelterCardContainer.append(shelterCard);
        mainContainer.append(shelterCardContainer)        
    });
}

zipSubmit.addEventListener("click", searchShelterByZip);