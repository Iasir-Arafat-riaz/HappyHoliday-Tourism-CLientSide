import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Shared/Header/Header";
import Login from "./pages/Login/Login";
import MyOrder from "./pages/MyOrder/MyOrder";
import ManageOrder from "./pages/ManageOrder/ManageOrder";
import AddPackages from "./pages/AddPackages/AddPackages";
import AuthProvider from "./pages/AuthProvider/AuthProvider";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/MyOrder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/ManageOrder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route  path="/AddPackages">
            <AddPackages></AddPackages>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute  path="/:Id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
