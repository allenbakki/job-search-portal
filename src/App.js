import "./App.css";
import Filters from "./components/filters";
import JobList from "./components/jobList";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ padding: "20px" }}>
        <Filters />
        <JobList />
      </div>
    </Provider>
  );
}

export default App;
