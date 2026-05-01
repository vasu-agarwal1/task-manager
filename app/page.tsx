"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("Member");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const res = await signIn("credentials", { email, password, redirect: false });
      if (res?.ok) router.push("/dashboard");
      else alert("Invalid credentials");
    } else {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      if (res.ok) setIsLogin(true);
      else alert("Signup failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-lg w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        
        {!isLogin && (
          <>
            <input type="text" placeholder="Name" className="border p-2 rounded text-black" onChange={(e) => setName(e.target.value)} required />
            <select className="border p-2 rounded text-black" onChange={(e) => setRole(e.target.value)}>
              <option value="Member">Member</option>
              <option value="Admin">Admin</option>
            </select>
          </>
        )}
        
        <input type="email" placeholder="Email" className="border p-2 rounded text-black" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="border p-2 rounded text-black" onChange={(e) => setPassword(e.target.value)} required />
        
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          {isLogin ? "Sign In" : "Create Account"}
        </button>
        
        <p className="text-sm text-center cursor-pointer text-blue-500" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
}