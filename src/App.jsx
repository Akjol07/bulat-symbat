import { useState } from "react";
import { Address } from "./components/Address";
import { Calendar } from "./components/Calendar";
import { Hero } from "./components/Hero";
import { Ouners } from "./components/Ouners";
import { Present } from "./components/Present";
import { Timer } from "./components/Timer";
import "./styles/global.scss";

function App() {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <main>
      <Hero isLocked={isLocked} setIsLocked={setIsLocked} />
      {isLocked && (
        <div style={{ marginTop: "-10vh" }}>
          <Present />
          <Calendar />
          <Address />
          <Ouners />
          <Timer />
        </div>
      )}
    </main>
  );
}

export default App;
