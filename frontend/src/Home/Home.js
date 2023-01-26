import helm from "./img/helm.png";

function Home() {
  return (
    <div>
      <div className="flex h-screen columns-2">
        <img src={helm} className="h-1/2 m-auto mx-10" alt="helm"/>
        <div className="w-full m-auto">
          <h1 className="font-sans font-medium text-7xl ml-10 border-b-4">
            QuarterMaster
          </h1>
          <h2 className="font-sans font-light text-3xl ml-10 mt-2">
            Best Expenses Tracker in the seven seas
          </h2>

          <form className="font-sans font-light text-lg ml-10 mt-5">
            <input
              type="text"
              className="block px-4 bg-gray-light border-2 rounded-lg w-72"
              name="name"
              placeholder="Username"
            />
            <input
              type="password"
              className="block px-4 bg-gray-light border-2 rounded-lg mt-2 w-72"
              name="name"
              placeholder="Password"
            />
            <input
              type="submit"
              className="px-4 bg-gray-light font-medium border-2 rounded-lg mt-4 border-black text-white bg-green"
              value="Log In"
            />
          </form>
          <h2 className="font-mono font-light text-lg ml-10 mt-2">
            --- OR ---
          </h2>
          <form className="font-sans font-light text-lg ml-10">
            <input
              type="submit"
              className="px-4 bg-gray-light font-medium mt-2 border-2 rounded-lg border-black text-white bg-blue"
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
