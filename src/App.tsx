import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import { State } from "./Redux";
import Routes from "./utils/routes";

function App() {
  const favourites = useSelector((state: State) => state.favourites);
  useEffect(() => {
    console.log(favourites);
  }, [favourites]);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
