import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { requestPending, serverError } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      if (data.success === false) {
        dispatch(signInFailure(data.error));
        return;
      }
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <section id="sign-up" className="max-w-md mx-auto px-4 mt-8 lg:max-w-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          required={true}
          className="bg-violet-100 px-2 py-1.5 rounded"
          name="email"
          id="email"
          placeholder="Email"
          autoComplete="true"
          onChange={handleChange}
        />
        <input
          type="password"
          required={true}
          className="bg-violet-100 px-2 py-1.5 rounded"
          name="password"
          id="password"
          placeholder="Password"
          autoComplete="true"
          onChange={handleChange}
        />
        {serverError && <p className="text-red-500 text-sm">{serverError}</p>}
        <button
          className="px-2 py-1.5 uppercase bg-violet-600 text-white font-bold rounded hover:bg-violet-800 disabled:bg-violet-900 disabled:text-gray-300 cursor-pointer"
          type="submit"
          disabled={requestPending}
        >
          {requestPending ? "Please Wait..." : "Submit"}
        </button>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
};
export default SignIn;
