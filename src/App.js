import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Result from "./Result";

import ResultIndex from "./pages/ResultIndex";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <React.Fragment>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/result">Result</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="result" element={<Result />}>
            <Route path="/" element={<ResultIndex data={data} />} />
            <Route
              path=":slug/:street/:city/:state/:zip/:apartment"
              element={<Detail />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <div>hello footer</div>
    </React.Fragment>
  );
}

export default App;

const NotFound = () => {
  return <div>Page not found</div>;
};

const data = {
  hello: {
    name: "Jay",
    street: "399 Congress Street",
    city: "Boston",
    state: "MA",
    zip: "02210",
    apartment: "1007",
  },
  goodbye: {
    name: "Fallon",
    street: "1 Canal Street",
    city: "Boston",
    state: "MA",
    zip: "02114",
    apartment: "431",
  },
};
