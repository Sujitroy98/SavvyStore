import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";
import toast from "react-hot-toast";

function SignUp() {
  const userDetail = {
    name: "",
    email: "",
    password: "",
    role: "user",
  };
  const { loading, setLoading } = useGlobalContext();
  const [userSignup, setUserSignup] = useState(userDetail);
  const navigate = useNavigate();

  function handleUserSignup() {
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
    }
  }
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="../../public/ssv.png"
          alt="Your Company"
        />
        <h2 class="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#">
          <div>
            <label
              htmlFor="name"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Full name
            </label>
            <div class="mt-2">
              <input
                id="name"
                name="name"
                required
                type="text"
                value={userSignup.name}
                onChange={(e) =>
                  setUserSignup({ ...userSignup, name: e.target.value })
                }
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                value={userSignup.email}
                onChange={(e) =>
                  setUserSignup({ ...userSignup, email: e.target.value })
                }
                className="... block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                value={userSignup.password}
                onChange={(e) =>
                  setUserSignup({ ...userSignup, password: e.target.value })
                }
                required
                class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleUserSignup}
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p class="mt-10 text-center text-sm text-gray-500">
          Already have an account? <span></span>
          <Link
            to={"/login"}
            class="font-semibold leading-6 text-green-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
