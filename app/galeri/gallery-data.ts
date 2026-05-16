export interface GalleryPhoto {
  title: string;
  caption: string;
  src?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    title: "Bagas, Fahdil, Paundra",
    caption: "Momen bareng setelah Bukber.",
    src: "/gallery/Bagas-Fahdil-Paundra.jpg",
  },
  {
    title: "E-Football Tour",
    caption: "Alhamdulillah hampir juara.",
    src: "/gallery/efootball.jpeg",
  },
  {
    title: "Fahdil & Frans",
    caption: "Dua kawan, satu frame, banyak cerita.",
    src: "/gallery/Fahdil-Frans.jpg",
  },
  {
    title: "Paundra & Chris",
    caption: "Potret santai dari duo KBM.",
    src: "/gallery/Paundra-Chris.jpg",
  },
];
