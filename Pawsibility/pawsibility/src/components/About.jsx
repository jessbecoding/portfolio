import React from "react";
import { addFav } from "../reducers/FavoritePets";
import { useLocation } from "react-router-dom";
import "../style/about.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const About = () => {
  const alreadyFavNotification = () =>
    toast.warn("This pet has already been favorited!");

  const addedFavNotification = () => {
    toast.success("This pet has been added to favorites!");
  };
  const location = useLocation();
  const pet = location.state;
  const favPets = useSelector((state) => state.favPets);
  const dispatch = useDispatch();
  const isPetInFav = favPets.findIndex((pets) => pets.id === pet.id);
  const addFavFunct = (pet) => {
    const isPetInFav = favPets.findIndex((pets) => pets.id === pet.id);
    console.log("this is the list of favorites:", favPets);
    console.log("this is the pet you're on:", pet);
    if (isPetInFav !== -1) {
      alreadyFavNotification();
    } else {
      dispatch(addFav(pet));
      addedFavNotification();
    }
  };
  return (
    <div className="mainContainer">
      <div className="firstSection">
        <div className="headerPhoto">
          <img
            className="image"
            src={pet?.primary_photo_cropped?.full}
            alt=""
          />
        </div>
        <div className="detailsContainer">
          <div className="secondSection">
            <div className="petName">
              <h1>{pet?.name}</h1>
            </div>
            <div className="breedLocation">
              <ul>
                <li>{pet?.breeds?.primary}</li>
                <li>
                  {pet?.contact?.address?.city},{pet?.contact?.address?.state}
                </li>
              </ul>
            </div>
          </div>
          <div className="thirdSection">
            <ul>
              <li>{pet?.age}</li>
              <li>{pet?.gender}</li>
              <li>{pet?.size}</li>
              <li>{pet?.colors?.primary}</li>
            </ul>
          </div>
          <div className="fourthSection">
            <h2>About</h2>
            <h3>Coat Length</h3>
            <p>{pet?.coat}</p>
            <h3>Health</h3>
            {/* something here about shots/spay/neuter */}
          </div>
          <div className="fifthSection">
            <h2>Meet {pet?.name}</h2>
            <p>{pet?.description}</p>
          </div>
          <div className="buttonContainer">
            <button
              className={isPetInFav !== -1 ? "favButtonOff" : "favButton"}
              onClick={() => addFavFunct(pet)}
              disabled={isPetInFav !== -1}
            >
              {isPetInFav !== -1 ? "Pet is in Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default About;
