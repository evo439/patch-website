const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://ptch.site"
).replace(/\/$/, "");

export const SITE = {
  name: "P‡TCH",
  description:
    "P‡TCH is a melodic rock project, created and arranged by creative and seasoned musicians from the Netherlands.",
  url: siteUrl,
  locale: "en-US",
  language: "en",
};

export const NAVIGATION = [
  { to: "/", label: "Home" },
  { to: "/shows", label: "Shows" },
  { to: "/music", label: "Music & Videos" },
  { to: "/gallery", label: "Photo Gallery" },
  { to: "/contact", label: "Contact" },
];

export const CONTACT = {
  email: "info@patchband.nl",
  socialHandle: "@ptchorginalrock",
  socialUrl: "https://instagram.com/ptch.site/",
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { href: "https://facebook.com/PTCH.Fb", label: "Facebook", icon: "facebook" },
  { href: "https://instagram.com/ptch.site/", label: "Instagram", icon: "instagram" },
  { href: "https://youtube.com/@PTCH-SITE", label: "YouTube", icon: "youtube" },
  { href: "https://tiktok.com/@ptchorginalrock", label: "TikTok", icon: "tiktok" },
  { href: "https://open.spotify.com/artist/4i2ROBHn4aNHJe5Jgtt59Y", label: "Spotify", icon: "spotify" },
];
