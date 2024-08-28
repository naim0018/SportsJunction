import { NavLink } from "react-router-dom"


const ErrorPage = () => {
  return (
    <div className="gap-1 grid h-screen place-content-center text-center bg-white px-4">
    <h1 className="uppercase tracking-widest text-gray-500 ">404 | Not Found</h1>
    <hr />
    <NavLink to='/'>
    <button className="text-gray-500 underline uppercase">back to home</button>
    </NavLink>
  </div>
  )
}

export default ErrorPage