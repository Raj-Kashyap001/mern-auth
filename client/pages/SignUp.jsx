import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section id="sign-up" className="max-w-md mx-auto mt-4 lg:max-w-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="bg-violet-100 px-2 py-1.5 rounded"
          name="username"
          id="username"
          placeholder="username"
        />
        <input
          type="email"
          className="bg-violet-100 px-2 py-1.5 rounded"
          name="email"
          id="email"
          placeholder="email"
        />
        <input
          type="password"
          className="bg-violet-100 px-2 py-1.5 rounded"
          name="password"
          id="password"
          placeholder="password"
        />
        <button
          className=" px-2 py-1.5 uppercase bg-violet-600 text-white font-bold rounded hover:bg-violet-800 cursor-pointer"
          type="submit"
        >
          Sign Up
        </button>
        <button className="px-2 py-1.5 uppercase bg-red-800 text-white font-bold rounded hover:bg-red-900 cursor-pointer">
          Continue With Google
        </button>
        <p>
          Don't have a account?
          <Link className="text-blue-500 hover:underline" to="/sign-in">
            Sign In
          </Link>
        </p>
      </form>
    </section>
  );
};
export default SignUp;
