import { AllRoutes } from "./routes/AllRoutes.js";
import { ToastContainer } from "react-toastify";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "react-toastify/dist/ReactToastify.css";
import './App.css';



function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose="3000"
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      
      <AllRoutes />
    </div>
  );
}

export default App;
