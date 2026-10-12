// Sample shows in the app's own shape: the same shape normalizeShow() (Lesson 03) turns TVmaze data into.
// The last show tests the "missing data" fallbacks in ShowCard.
export const sampleShows = [
  {
    id: 169,
    title: "Breaking Bad",
    premiered: "2008-01-20",
    rating: 9.2,
    posterUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg",
    summary:
      "Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy.",
    genres: ["Drama", "Crime", "Thriller"],
  },
  {
    id: 82,
    title: "Game of Thrones",
    premiered: "2011-04-17",
    rating: 8.9,
    posterUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245274.jpg",
    summary:
      "Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span…",
    genres: ["Drama", "Adventure", "Fantasy"],
  },
  {
    id: 32,
    title: "Fargo",
    premiered: "2014-04-15",
    rating: 8.6,
    posterUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/487/1219631.jpg",
    summary:
      "Fargo is a seasonal anthology crime drama with some dark comical elements, inspired by the film Fargo written by the Coen brothers. Each season…",
    genres: ["Drama", "Comedy", "Crime"],
  },
  {
    id: 216,
    title: "Rick and Morty",
    premiered: "2013-12-02",
    rating: 8.7,
    posterUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/626/1566363.jpg",
    summary:
      "Rick is a mentally gifted, but sociopathic and alcoholic scientist and a grandfather to Morty; an awkward, impressionable, and somewhat spineless…",
    genres: ["Comedy", "Adventure", "Science-Fiction"],
  },
  {
    id: 2,
    title: "Person of Interest",
    premiered: "2011-09-22",
    rating: 8.8,
    posterUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    summary:
      "You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed…",
    genres: ["Action", "Crime", "Science-Fiction"],
  },
  {
    id: 66,
    title: "The Big Bang Theory",
    premiered: "2007-09-24",
    rating: 8,
    posterUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/173/433868.jpg",
    summary:
      'The Big Bang Theory is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of "beautiful minds" that understand how the…',
    genres: ["Comedy"],
  },
  {
    id: 999999,
    title: "My Indie Show",
    premiered: "",
    rating: 0,
    posterUrl: null,
    summary:
      "A tiny web series with no poster, no premiere date and no rating yet.",
    genres: [],
  },
];
