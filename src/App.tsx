import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OmsMain from "./pages/asc/oms/OmsMain";
import DdsMain from "./pages/asc/dds/DdsMain";
import Contents from "./pages/introduce/Contents";
import AscMain from "./pages/asc/AscMain";
import IntroduceAsc from "./pages/asc/introduce/IntroduceAsc";
import ImageSystemMain from "./pages/imageSystem/ImageSystemMain";
import { ScrollToTop } from "./pages/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Contents />} />
          <Route path="asc" element={<AscMain />}>
            <Route path="introduce" element={<IntroduceAsc />} />
            <Route path="oms" element={<OmsMain />} />
            <Route path="dds" element={<DdsMain />} />
          </Route>
          <Route path="imageSystem">
            <Route path="introduce" element={<ImageSystemMain />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
