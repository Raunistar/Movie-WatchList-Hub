export default function normalizeShow(show) {
  return {
    id: show.id,
    title: show.name,
    rating: show.rating?.average ?? 0,
    posterUrl: show.image?.medium ?? null,
    premiered: show.premiered ?? "",
    summary: (show.summary ?? "").replace(/<[^>]*>/g, ""),
    genres: show.genres ?? [],
  };
}
