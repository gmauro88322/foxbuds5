import reviews from "../../data/reviews.json";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold">Customer Reviews</h1>
        <p className="text-white/80 mt-2">Real feedback from Foxy Buds shoppers.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div key={r.id} className="card bg-neutral-900 p-5 rounded-xl border border-white/10">
              <div className="text-base">“{r.text}”</div>
              <div className="mt-3 text-sm text-white/70">— {r.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 card bg-neutral-900 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-bold mb-2">Leave a Review</h2>
          <p className="text-white/70 text-sm mb-4">
            This is a demo form. We can wire it to a real database (Supabase/Airtable) later.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! In production, we’ll save this to a database.");
            }}
            className="space-y-3"
          >
            <input placeholder="Your Name" className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
            <textarea placeholder="Your review..." rows={4} className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
            <button className="button bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
