import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import uuid from "react-uuid";
import FormScreen from "./screens/FormScreen";
import UserScreen from "./screens/UserScreen";

function App() {
  // used useState to store user data and passing all of them down to components via props
  const [users, setUsers] = useState([
    {
      id: uuid(),
      fName: "Baburao",
      lName: "Ganpatrao Apte",
      email: "Baburaoganpatraoapte@gmail.com",
      phone: 9999999999,
    },
    {
      id: uuid(),
      fName: "Raghu",
      lName: "Nandan",
      email: "MerePecheVo@gmail.com",
      phone: 9999999999,
    },
    {
      id: uuid(),
      fName: "Ganesh",
      lName: "N/A",
      email: "chotiGangaMeKudaDiya@gmail.com",
      phone: 9999999999,
    },
  ]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<UserScreen users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            exact
            path="/form"
            element={<FormScreen users={users} setUsers={setUsers} />}
          ></Route>
        </Routes>
      </Router>
      {/* <Form users={users} setUsers={setUsers} /> */}
    </div>
  );
}

export default App;
