import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import { forwardRef, useImperativeHandle } from "react";
import playIcon from "../../Assets/Images/play-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "../../Redux/reducers/films";

const GetFilms = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.filmsData.films.films);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useImperativeHandle(ref, () => ({
    searchItems(e) {
      setSearchInput(e);
      if (searchInput !== "") {
        const filteredData = films.filter((item) => {
          return Object.values(item.title)
            .join("")
            .toUpperCase()
            .includes(searchInput.toUpperCase());
        });
        setFilteredResults(filteredData);
        console.log(filteredResults);
      } else {
        setFilteredResults(films);
      }
    },
  }));

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  const RenderAllFilms = () => {
    return films.map((el) => (
      <div className="film-image" style={{ backgroundImage: `url(${el.image})` }} key={el._id}>
        <div className="background-shadow"></div>
        <div className="play-icon">
          <img src={playIcon} />
        </div>
      </div>
    ));
  };

  const RenderFilteredFilms = () => {
    return filteredResults.map((el) => (
      <div className="film-image" style={{ backgroundImage: `url(${el.image})` }} key={el._id}>
        <div className="background-shadow"></div>
        <div className="play-icon">
          <img src={playIcon} />
        </div>
      </div>
    ));
  };

  const ShowFilms = () => {
    return searchInput.length > 1 ? RenderFilteredFilms() : RenderAllFilms();
  };

  return (
    <div className="grid-template">
      {films ? ShowFilms() : <BallTriangle color="#00BFFF" height={80} width={80} />}
    </div>
  );
});

export default GetFilms;
