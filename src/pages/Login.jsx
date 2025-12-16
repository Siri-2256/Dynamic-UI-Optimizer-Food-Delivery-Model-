import { useApp } from "../context/AppContext";

export default function Login() {
  const { setUser } = useApp();

  return (
    <div className="p-6">
      <input placeholder="Phone Number" className="border p-2" />
      <button
        className="bg-orange-500 text-white px-4 py-2 ml-2"
        onClick={() => setUser({ name: "User" })}
      >
        Login (Mock OTP)
      </button>
    </div>
  );
}
