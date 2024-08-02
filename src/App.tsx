import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ThemeProvider from "./context/ThemeContext";
import { SnackbarProvider } from "notistack";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <Suspense fallback={<Loader />}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </Suspense>{" "}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
