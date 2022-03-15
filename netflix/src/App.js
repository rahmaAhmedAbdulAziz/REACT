import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./pages/Navbar";
import MoviList from "./pages/MoviList";
import Form from "./pages/Form";
import Movie from "./pages/Movie";
import Register from "./pages/Register";
import MovieDetails from "./pages/MovieDetails";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container my-5">
        <Switch>
          <Route path={"/"} exact component={MoviList} />
          <Route path={"/Form"} exact component={Form} />
          <Route path={"/Movie"} exact component={Movie} />
          <Route path={"/Movie-Details/:id"} exact component={MovieDetails} />
          <Route path={"/Register"} exact component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
