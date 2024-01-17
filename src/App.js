import Aos from "aos";
import { useEffect, useState } from "react";
import AppRoutes from "./components/Routes";
// import "./css/bootstrap-icons.css";
// import "./css/bootstrap.min.css";

function App() {
  const [isCssLoaded, setCssLoaded] = useState(false);
  useEffect(() => {
    Aos.init({ offset: 100, duration: 750, easing: 'ease-in-sine', delay: 10});
    import('./css/safe-zone-template.css')
      .then(() => {
        setCssLoaded(true);
      })
  }, [])
  
  return (
    <div id="app" style={{ display: isCssLoaded ? 'block' : 'none' }}>
              <AppRoutes />
    </div>
  );
}

export default App;
