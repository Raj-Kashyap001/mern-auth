import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [requestPending, setRequestPending] = useState(false);
  const [serverError, setServerError] = useState({});
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
          `Ops! Something Went Wrong. Please check your details and try agian.`
        );
      }
      setRequestPending(false);
      setServerError("");
    } catch (error) {
      setRequestPending(false);
      setServerError(error);
    }
  };

  return (
    <section id="sign-up" className="max-w-md mx-auto px-4 mt-8 lg:max-w-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-violet-100 px-2 py-1.5 rounded"
          name="username"
          id="username"
          placeholder="username"
          autoComplete="true"
          onChange={handleChange}
        />
        <input
          type="email"
          className="bg-violet-100 px-2 py-1.5 rounded"
          name="email"
          id="email"
          placeholder="email"
          autoComplete="true"
          onChange={handleChange}
        />
        <input
          type="password"
          className="bg-violet-100 px-2 py-1.5 rounded"
          name="password"
          id="password"
          placeholder="password"
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
        <p>
          Don't have a account?{" "}
          <Link className="text-blue-500 hover:underline" to="/sign-in">
            Sign In
          </Link>
        </p>
      </form>
    </section>
  );
};
export default SignUp;
