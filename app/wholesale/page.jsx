"use client";

import { useState } from "react";

export default function WholesalePage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    // TODO: wire to an actual endpoint or form service (e.g., Formspree, Resend, Airtable, etc.)
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold">Wholesale Program</h1>
        <p className="text-white/80 mt-2">
          Apply for wholesale pricing, bulk inventory access, and (optional) net terms.
        </p>

        <div className="card bg-neutral-900 rounded-xl border border-white/10 p-6 mt-8">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Business Name</label>
                <input className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Contact Name</label>
                <input className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone</label>
                  <input className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Website (optional)</label>
                <input className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Business Address</label>
                <input className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Resale / License # (if applicable)</label>
                <input className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Estimated Monthly Volume</label>
                <select className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2">
                  <option>&lt; $1,000</option>
                  <option>$1,000 – $5,000</option>
                  <option>$5,000 – $15,000</option>
                  <option>$15,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Notes</label>
                <textarea rows={4} className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
              </div>

              <button className="button bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600" type="submit">
                Submit Application
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold">Thanks! 🎉</h2>
              <p className="text-white/80 mt-2">
                Your wholesale application has been recorded. We’ll reach out shortly.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 text-sm text-white/70">
          By applying you agree to our program terms. We’ll review and contact you with next steps.
        </div>
      </div>
    </div>
  );
}
