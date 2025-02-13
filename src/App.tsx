import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ToolDetails from "./components/ToolDetails";
import { defaultTools } from "./components/home";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tool/:id"
            element={
              <ToolDetails
                {...defaultTools.find(
                  (t) =>
                    t.name.toLowerCase().replace(/ /g, "-") ===
                    window.location.pathname.split("/").pop(),
                )}
              />
            }
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
