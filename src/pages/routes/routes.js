import SignUp from "../Auth/SignUp/SignUp"
import Login from "../Auth/Login/Login"
import UserDashboard from "../UserDashboard/UserDashboard"
import HomePage from "../Homepage/HomePage"

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
    }
  ]
}

export default routes
