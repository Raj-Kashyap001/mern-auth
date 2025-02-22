import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [serverError, setServerError] = useState({});
  const [requestPending, setRequestPending] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setServerError({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setRequestPending(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error(
          `Ops! Something Went Wrong. Please check your details and try again.`
        );
      }
      setRequestPending(false);
      setServerError({});
      navigate("/signin");
    } catch (error) {
      setRequestPending(false);
      setServerError(error);
    }
  };

  return (
    <section id="sign-up" className="max-w-md mx-auto px-4 mt-8 lg:max-w-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          required={true}
          className="bg-violet-100 px-2 py-1.5 rounded mt-2"
          name="username"
          id="username"
          placeholder="Username"
          autoComplete="true"
          onChange={handleChange}
        />
        <input
          type="email"
          required={true}
          className="bg-violet-100 px-2 py-1.5 rounded mt-2"
          name="email"
          id="email"
          placeholder="Email"
          autoComplete="true"
          onChange={handleChange}
        />
        <input
          type="password"
          required={true}
          className="bg-violet-100 px-2 py-1.5 rounded mt-2"
          name="password"
          id="password"
          placeholder="Password"
          autoComplete="true"
          onChange={handleChange}
        />
        {serverError && (
          <p className="text-red-500 text-sm">{serverError.message}</p>
        )}

        <button
          className=" px-2 py-1.5 uppercase bg-violet-600 text-white font-bold rounded hover:bg-violet-800 disabled:bg-violet-900 disabled:text-gray-300 cursor-pointer"
          type="submit"
          disabled={requestPending}
        >
          {requestPending ? "Please Wait..." : "Submit"}
        </button>
        <OAuth />
        <p>
          Already have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/signin">
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
};
export default SignUp;
