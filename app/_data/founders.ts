export type FounderProfile = {
  name: string;
  shortName: string;
  image: string | null;
};

export const founderProfiles: readonly FounderProfile[] = [
  {
    name: "Arjun Maheswara Paundra",
    shortName: "Paundra",
    image: "/founders/paundra-beranda.png",
  },
  {
    name: "Frans Maylandgo Saragih",
    shortName: "Frans",
    image: "/founders/frans-maylandgo-saragih.png",
  },
  {
    name: "Fahdil Raihandi",
    shortName: "Fahdil",
    image: "/founders/fahdil-raihandi.png",
  },
  {
    name: "Andy Emerik",
    shortName: "Andy",
    image: "/founders/andy-emerik.png",
  },
  {
    name: "Christian Haikhel Sengkley",
    shortName: "Chris",
    image: "/founders/christian-haikhel-sengkley.png",
  },
  {
    name: "Muhammad Rasyid",
    shortName: "Rasyid",
    image: "/founders/muhammad-rasyid.png",
  },
  {
    name: "Zulfikarnaen",
    shortName: "Zul",
    image: "/founders/zulfikarnaen.png",
  },
  {
    name: "Rifa Dwinanda Bagaskara",
    shortName: "Rifa",
    image: "/founders/rifa-dwinanda-bagaskara.png",
  },
];

export const founderNames = founderProfiles.map((founder) => founder.name);

if (founderProfiles.length !== 8) {
  throw new Error("Founder profiles harus berisi 8 anggota.");
}
