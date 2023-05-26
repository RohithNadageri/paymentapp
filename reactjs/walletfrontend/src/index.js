import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import RouteMain from "./component/HomePage/routermain";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/reducer";
import Profile from "./component/Profile";
import ViewBillPayment from "./component/BillPayments/ViewBillPayment";


// console.log(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouteMain />

{/* <ViewBillPayment/> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
