import React, { Suspense, useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { renderRoutes, routes } from "./routes";

const App = () => {
  const [renderedRoutes, setRenderedRoutes] = useState();

  useEffect(() => {
    let result = renderRoutes(routes);
    setRenderedRoutes(result);
  }, []);

  return (
    <div className="App">
      <Suspense fallback={() => <h2>Loading...</h2>}>
        <Switch>{renderedRoutes}</Switch>
      </Suspense>
    </div>
  );
};

export default App;
