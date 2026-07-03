import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setMessage("Successfully subscribed!");
    setEmail("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-24 bg-[#0B1120]">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="
          rounded-3xl
          bg-gradient-to-r
          from-[#111827]
          to-blue-900
          p-12
          text-center
        "
        >
          <p className="uppercase tracking-widest text-blue-400 mb-3">
            Newsletter
          </p>

          <h2 className="text-5xl font-bold text-white">Stay Updated</h2>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Subscribe to receive the latest product updates, AI news and
            exclusive launch offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              mt-10
              flex
              flex-col
              md:flex-row
              gap-4
              justify-center
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              className="
                flex-1
                px-6
                py-4
                rounded-full
                bg-white
                outline-none
                text-black
              "
            />

            <button
              type="submit"
              className="
                bg-blue-600
                hover:bg-blue-500
                transition
                duration-300
                px-8
                py-4
                rounded-full
                text-white
                font-semibold
              "
            >
              Subscribe
            </button>
          </form>
          {/* Thông báo */}
          {message && (
            <p className="text-green-400 mt-5 font-medium">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
