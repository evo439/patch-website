import { getCollection } from "astro:content";

export async function getBandInfo() {
  let settings = null;
  try {
    const list = await getCollection("settings");
    settings = list.find((item) => item.id === "band")?.data || list[0]?.data;
  } catch {
    settings = null;
  }

  const email = settings?.contactEmail || "info@patchband.nl";
  const phone = settings?.contactPhone || "+31 6 12345678";
  const bio = settings?.bio || "P‡TCH is a melodic rock project, created and arranged by creative and seasoned musicians from the Netherlands.";

  const socialLinks = [
    {
      name: "Facebook",
      label: "Facebook",
      icon: "facebook",
      href: settings?.facebookUrl || "https://facebook.com/PTCH.Fb",
      handle: "PTCH.Fb",
    },
    {
      name: "Instagram",
      label: "Instagram",
      icon: "instagram",
      href: settings?.instagramUrl || "https://instagram.com/ptch.site/",
      handle: "@ptch.site",
    },
    {
      name: "YouTube",
      label: "YouTube",
      icon: "youtube",
      href: settings?.youtubeUrl || "https://youtube.com/@PTCH-SITE",
      handle: "@PTCH-SITE",
    },
    {
      name: "TikTok",
      label: "TikTok",
      icon: "tiktok",
      href: settings?.tiktokUrl || "https://tiktok.com/@ptchorginalrock",
      handle: "@ptchorginalrock",
    },
    {
      name: "Spotify",
      label: "Spotify",
      icon: "spotify",
      href: settings?.spotifyUrl || "https://open.spotify.com/artist/4i2ROBHn4aNHJe5Jgtt59Y",
      handle: "P‡TCH on Spotify",
    },
  ].filter((s) => Boolean(s.href));

  return {
    email,
    phone,
    bio,
    socialLinks,
  };
}
