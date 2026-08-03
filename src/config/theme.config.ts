const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://quietpages-eta.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  name: "P‡TCH",
  description:
    "P‡TCH is a melodic rock project, created and arranged by creative and seasoned musicians from the Netherlands.",
  url: siteUrl,
  locale: "en-US",
  language: "en",
  repositoryUrl: "https://github.com/andreialba/quietpages",
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
  socialHandle: "@patchband",
  socialUrl: "https://instagram.com",
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

export const authors = [
  {
    slug: "elena-march",
    name: "Elena March",
    bio: "Writer & editor covering design, craft, and slow technology.",
    longBio:
      "Elena March writes about the quiet edges of design and technology. Previously an editor at two small magazines, she now publishes essays and field notes from a desk overlooking the harbour.",
    avatar: "/avatars/elena-march.svg",
  },
  {
    slug: "samuel-okafor",
    name: "Samuel Okafor",
    bio: "Software engineer with a soft spot for typography and the open web.",
    longBio:
      "Samuel builds tools for writers and reads more than he ships. He believes the best interfaces are the ones you don't notice.",
    avatar: "/avatars/samuel-okafor.svg",
  },
  {
    slug: "mira-iwasaki",
    name: "Mira Iwasaki",
    bio: "Photographer and essayist based between Kyoto and Lisbon.",
    longBio:
      "Mira's work sits at the intersection of place, memory, and the everyday object. Her essays have appeared in a number of small but loved publications.",
    avatar: "/avatars/mira-iwasaki.svg",
  },
];

export const categories = [
  { slug: "essays", name: "Essays" },
  { slug: "design", name: "Design" },
  { slug: "engineering", name: "Engineering" },
  { slug: "field-notes", name: "Field Notes" },
  { slug: "interviews", name: "Interviews" },
];

export const tags = [
  { slug: "writing", name: "Writing" },
  { slug: "typography", name: "Typography" },
  { slug: "minimalism", name: "Minimalism" },
  { slug: "tools", name: "Tools" },
  { slug: "travel", name: "Travel" },
  { slug: "process", name: "Process" },
  { slug: "web", name: "Web" },
  { slug: "books", name: "Books" },
];
