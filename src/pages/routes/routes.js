import SignUp from "../Auth/SignUp/SignUp"
import Login from "../Auth/Login/Login"

const routes = [
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
]

export default routes
