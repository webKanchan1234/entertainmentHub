import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import SimpleButtonNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
    <Container>
      <Switch>
        <Route path="/" component={Trending} exact/>
        <Route path="/movies" component={Movies}/>
        <Route path="/series" component={Series}/>
        <Route path="/search" component={Search}/>
      </Switch>
    </Container>
    </div>
    <SimpleButtonNavigation/>
    </BrowserRouter>
  );
}

export default App;
