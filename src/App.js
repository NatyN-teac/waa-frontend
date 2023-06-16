
import { CurrentContext, useState } from "./globalContext";
import Dashboard from "./pages/Dashboard";

function App() {
   const [currentPost, setCurrentPost] = useState();
   return (
     <CurrentContext.Provider value={{ currentPost, setCurrentPost }}>
       <Dashboard />;
     </CurrentContext.Provider>
   );
}

export default App;
