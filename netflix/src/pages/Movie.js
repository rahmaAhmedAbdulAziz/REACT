import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../Network/axios";

export default function Movie() {
  const [Movie, setUsers] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/Movie", {
        params: {
          limit: "7",
        },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));

    // axios.post(
    //   "url",
    //   {
    //     username: "",
    //     age: "",
    //   },
    //   {
    //     params: {
    //       test: "param1",
    //     },
    //   }
    // );
  }, []);

  return (
    <div>
      Welcome to Movie
      <ul>
        {Movie.map((movie) => {
          return (
            <Link to={`/MovieDetlies/${movie.id}`} key={movie.email}>
              <li>{user.email}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
