import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Converter} from "./components/Converter";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="converter">
          <Route path="length" element={<Converter unit="length" />} />
          <Route path="weight" element={<Converter unit="weight" />} />
          <Route path="speed" element={<Converter unit="speed" />} />
          <Route path="temperature" element={<Converter unit="temperature" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
