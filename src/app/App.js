import React, { Suspense, useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { renderRoutes, routes } from "./routes";
import Layout from "../components/layout";
import Loading from "../components/loading";

const App = () => {
  const [renderedRoutes, setRenderedRoutes] = useState();

  useEffect(() => {
    let result = renderRoutes(routes);
    setRenderedRoutes(result);
  }, []);

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>{renderedRoutes}</Switch>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
