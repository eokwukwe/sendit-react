import SignUp from "../Auth/SignUp/SignUp"
import Login from "../Auth/Login/Login"
import UserDashboard from "../UserDashboard/UserDashboard"
import HomePage from "../Homepage/HomePage"
import CreateOrderForm from "../../components/CreateOrderForm/CreateOrderForm"
import AdminDashboard from "../AdminDashboard/AdminDashboard"
import ChangeLocation from "../../components/ChangeLocation/ChangeLocation"

const routes = {
  public: [
    {
      path: "/",
      component: HomePage,
      name: "home",
      exact: true
    },
    {
      path: "/signup",
      component: SignUp,
      name: "signup",
      exact: true
    },
    {
      path: "/login",
      component: Login,
      name: "login",
      exact: true
    }
  ],
  protected: [
    {
      path: "/user",
      component: UserDashboard,
      name: "user",
      exact: true
    },
    {
      path: "/create-order",
      component: CreateOrderForm,
      name: "order",
      exact: true
    },
    {
      path: "/admin",
      component: AdminDashboard,
      name: "admin",
      exact: true
    },
    {
      path: "/update-location/:id",
      component: ChangeLocation,
      name: "location",
      exact: true
    }
  ]
}

export default routes
