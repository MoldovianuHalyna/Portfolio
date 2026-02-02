export default function Reviews() {
  return (
    <section id="reviews" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight">Reviews</h2>

        <div className="mt-10 rounded-xl border border-border bg-background p-6">
          <p className="text-sm text-foreground/80">
            Reviews slider (Swiper) + backend fetch will be implemented here.
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            On API error: show toast and render “Not found”.
          </p>
        </div>
      </div>
    </section>
  );
}
