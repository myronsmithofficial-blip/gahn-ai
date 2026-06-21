"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function ProfilePage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setEmail(user.email || "");

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();

      setFullName(profile?.full_name || user.user_metadata?.full_name || "");
      setLoading(false);
    }

    loadProfile();
  }, [router]);

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setError("");
    setSaving(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName })
      .eq("id", user.id);

    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }

    setMessage("Profile updated successfully.");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f6f9ff] text-[#061633]">
        <p className="text-xl font-black">Loading profile...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f9ff] px-6 py-10 text-[#061633]">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-xl">
        <Link href="/dashboard" className="text-sm font-bold text-blue-600">
          ← Back to Dashboard
        </Link>

        <h1 className="mt-6 text-4xl font-black">Edit Profile</h1>
        <p className="mt-2 text-slate-500">
          Update your account profile information.
        </p>

        <form onSubmit={handleSave} className="mt-8">
          <label className="text-sm font-black">Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-400"
          />

          <label className="mt-6 block text-sm font-black">Email</label>
          <input
            value={email}
            disabled
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-100 px-5 py-4 text-slate-500"
          />

          {message && (
            <p className="mt-5 rounded-xl bg-green-50 p-4 text-green-700">
              {message}
            </p>
          )}

          {error && (
            <p className="mt-5 rounded-xl bg-red-50 p-4 text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="mt-8 w-full rounded-2xl bg-[#071f4d] px-5 py-4 font-black text-white disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Profile"}
          </button>
        </form>
      </div>
    </main>
  );
}