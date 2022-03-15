import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import  axios from 'axios';

export default function Home(props) {
  const history = useHistory();
  const locat = useLocation();
  console.log(locat);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=')
    return () => {
    //   console.log("DESTROYED");
    };
  }, []);
  return (
    <div>
      Welcome to MoviList
      {history}
      {/* <Button
        name={"Redirect To Users"}
        handleClick={() => history.push("/users")}
      /> */}
    </div>
  );
}