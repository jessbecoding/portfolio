import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { searchPets } from "../reducers/SearchPetSlice";
import "../style/search.css";
import { ToastContainer, toast } from "react-toastify";

const Search = () => {
  // API INFO ONLY CHANGE TOKEN
  const APIkey = import.meta.env.VITE_API_KEY;
  const bearerToken = import.meta.env.VITE_BEARER_TOKEN;

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${bearerToken}}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  // END API TOKEN

  const dispatch = useDispatch();
  const [zip, setZip] = useState("");
  const [type, setType] = useState("");
  const [distance, setDistance] = useState("100");
  const pets = useSelector((state) => state.pets);
  const typeInput = [
    {
      value: "Cat",
      label: "Cat",
    },
    {
      value: "Dog",
      label: "Dog",
    },
    {
      value: "Rabbit",
      label: "Rabbit",
    },
    {
      value: "Horse",
      label: "Horse",
    },
    {
      value: "Bird",
      label: "Bird",
    },
    {
      value: "Barnyard",
      label: "Barnyard",
    },
    {
      value: "Scales, Fins & Other",
      label: "Scales, Fins & Other",
    },
    {
      value: "",
      label: "Pet Type",
    },
  ];
  const distanceInput = [
    { value: "10", label: "10 miles" },
    { value: "25", label: "25 miles" },
    { value: "50", label: "50 miles" },
    { value: "100", label: "100 miles" },
    { value: "500", label: "Anywhere" },
  ];
  const searchPetsByZip = async () => {
    const validZip = new RegExp("^[0-9]{5}([- /]?[0-9]{4})?$");
    if (!validZip.test(zip)) {
      toast.warn("Invalid zip code, please try again!");
    } else {
      const petZipURL = `https://api.petfinder.com/v2/animals/?type=${type}&location=${zip}&distance=${distance}`;
      const petData = await fetch(petZipURL, requestOptions);
      const json = await petData.json();
      const jsonHome = json.animals;
      console.log(petZipURL);
      dispatch(searchPets(jsonHome));
    }
  };
  return (
    <div className="searchItems">
      <div className="zipDiv">
        <input
          placeholder="Enter your zip here..."
          className="zipInput"
          onChange={(e) => setZip(e.target.value)}
          type="text"
        />
        <div className="filterDiv">
          <div>
            <Select
              className="dropdown"
              value={typeInput.value}
              options={typeInput}
              defaultValue={typeInput[7]}
              name="typeInput"
              onChange={(e) => setType(e.value)}
            />
          </div>
          <div>
            <Select
              className="dropdown"
              value={distanceInput.value}
              options={distanceInput}
              defaultValue={distanceInput[3]}
              name="distanceInput"
              onChange={(e) => setDistance(e.value)}
            />
          </div>
        </div>
        <button className="searchButton" onClick={() => searchPetsByZip()}>
          Search
        </button>
      </div>
      <div className="petCardContainer">
        {pets?.map((pet) => (
          <Link
            to={`/about/${pet.name}/${pet.id}`}
            state={pet}
            className="petLinks"
          >
            <div className="petCard">
              <div>
                <img
                  className="petPhoto"
                  src={pet?.primary_photo_cropped?.small}
                />
              </div>
              <div className="petNameContainer">
                <h1 className="petName">{pet?.name}</h1>
              </div>
              <div>
                <ul>
                  <li className="petAge">{pet?.age}</li>
                  <li className="petBreed">{pet?.breeds?.primary}</li>
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Search;
