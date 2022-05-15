import React from "react";
import { useState } from "react";
import GetFilms from "./Getfilms";
import { useRef } from "react";

const ProfilePage = (props) => {
  const [searchItem, setSearchItem] = useState("");
  const childCompRef = useRef();

  return (
    <div className="home-page-container">
      <div className="home-page-inner">
        <div className="home-page-header">
          <input
            className="search-film"
            type="text"
            placeholder="search film"
            onChange={(e) => {
              childCompRef.current.searchItems(e.target.value);
            }}
          />
          <div className="home-page-title">{props.login}</div>
        </div>
        <div className="films-container">
          <GetFilms ref={childCompRef} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
