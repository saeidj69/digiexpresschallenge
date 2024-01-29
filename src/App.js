import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import { useState } from "react";
function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelectedItem = (item) => {
    setSelectedItem(item);
  };
  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown onSelectItem={handleSelectedItem} />
        </div>
        <div className="result">{selectedItem}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
