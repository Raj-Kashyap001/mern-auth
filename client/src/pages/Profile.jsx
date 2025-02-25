import { useSelector } from "react-redux";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <section className="px-2 py-4 max-w-lg mx-auto">
      <h1 className="text-center font-bold text-3xl mb-4">Profile</h1>
      <img
        src={currentUser.profilePicture}
        className="w-32 mb-4 mx-auto"
        alt="Profile Photo"
      />
      <form className="grid gap-2">
        <input
          type="text"
          placeholder="username"
          className="bg-purple-100 p-2 rounded-lg"
          defaultValue={currentUser.username}
        />
        <input
          type="text"
          placeholder="email"
          className="bg-purple-100 p-2 rounded-lg"
          defaultValue={currentUser.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="bg-purple-100 p-2 rounded-lg"
          placeholder="password"
        />
        <button
          className="px-2 py-1.5 my-2 uppercase bg-violet-600 text-white font-bold rounded hover:bg-violet-800 disabled:bg-violet-900 disabled:text-gray-300 cursor-pointer disabled:cursor-not-allowed"
          type="submit"
        >
          Update
        </button>
      </form>
      <div className="flex justify-between mt-2">
        <button className="text-red-500 hover:underline cursor-pointer">
          Log Out
        </button>
        <button className="text-red-500 hover:underline cursor-pointer">
          Delete Account
        </button>
      </div>
    </section>
  );
};
export default Profile;
