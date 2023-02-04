import React from "react"
import Home from "./Auth"
import { useState } from "react"


export default function Form(props) {
  let [formMode, setFormMode] = useState("signin")
  const toggleForm = (function () {
    if (formMode === "signin")
      setFormMode("signup")
    else
      setFormMode("signin")
  })

  if (formMode === 'signin') {
    return (
      <div className="font-sans">
        <form className="font-light text-2xl mt-5">
          <input
            type="text"
            className="block py-2 px-4 bg-gray-light border-2 rounded-lg w-72"
            name="username"
            placeholder="Username"
          />
          <input
            type="password"
            className="block py-2 px-4 bg-gray-light border-2 rounded-lg mt-2 w-72"
            name="passwd"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-36 py-1 px-4 bg-gray-light text-2xl font-medium border-2 rounded-lg mt-4 border-black text-white bg-green"
          >Sign In</button>
        </form>
        <h2 className="font-mono font-light text-lg mt-2">
          --- OR ---
        </h2>
        <button
          type="submit"
          className="w-36 py-1 px-4 bg-gray-light text-2xl font-medium mt-2 border-2 rounded-lg border-black text-white bg-blue"
          value="Sign Up"
          onClick={toggleForm}
        >Sign Up</button>
      </div>
    )
  }
  else {
    return (
      <div className="font-sans">
        <form className=" font-light text-2xl  mt-5">
          <input
            type="text"
            className="block py-2 px-4 bg-gray-light border-2 rounded-lg w-72"
            name="fullName"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="block py-2 px-4 bg-gray-light border-2 rounded-lg mt-2 w-72"
            name="username"
            placeholder="Username"
          />
          <input
            type="password"
            className="block py-2 px-4 bg-gray-light border-2 rounded-lg mt-2 w-72"
            name="passwd"
            placeholder="Password"
          />
          <input
            type="password"
            className="block py-2 px-4 bg-gray-light border-2 rounded-lg mt-2 w-72"
            name="passwd_cnfrm"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="w-36 py-2 px-4 bg-gray-light text-2xl font-medium border-2 rounded-lg mt-4 border-black text-white bg-blue"
          >Sign Up</button>
        </form>
        <h2 className="font-mono font-light text-lg  mt-2">
          --- OR ---
        </h2>
        <button
          type="submit"
          className="w-36 py-2 px-4 bg-gray-light font-medium text-2xl mt-2 border-2 rounded-lg border-black text-white bg-green"
          value="Sign In"
          onClick={toggleForm}
        >Sign In</button>
      </div>
    )
  }
}

function doNothing() {

}