import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../reducers/FavoritePets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../src/style/favpets.css";

const FavPets = () => {
  const dupNotification = () =>
    toast.success("Pet has been removed from favorites.");

  const favPets = useSelector((state) => state.favPets);
  const dispatch = useDispatch();
  const delFav = (pet) => {
    dispatch(removeFav(pet));
    dupNotification();
  };
  return (
    <div className="mainContainerFav">
      <div className="petCardContainerFav">
        {favPets?.map((pet) => (
          <div className="petCardFav">
            <div className="photoDiv">
              <img
                className="petPhoto"
                src={pet?.primary_photo_cropped?.small}
                alt=""
              />
            </div>
            <div>
              <div>
                <h3>{pet?.name}</h3>
              </div>
              <div>
                <ul>
                  <li>{pet?.age}</li>
                  <li>{pet?.gender}</li>
                  <li>{pet?.breeds?.primary}</li>
                </ul>
              </div>
            </div>
            <div className="buttonDiv">
              <button className="favoriteButton" onClick={() => delFav(pet)}>
                Remove From Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default FavPets;
