import Aos from "aos";
import { useEffect } from "react";
import AppRoutes from "./components/Routes";

function App() {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 750, easing: 'ease-in-sine', delay: 10});
  }, [])

  return (
    <div>
        <AppRoutes />
    </div>
  );
}

export default App;
