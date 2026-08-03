import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const shows = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "./src/content/shows",
  }),
  schema: z.object({
    datum: z.string(),
    locatie: z.string(),
    stad: z.string(),
    ticketUrl: z.string().optional(),
  }),
});

const settings = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "./src/content/settings",
  }),
  schema: z.object({
    bio: z.string().optional(),
    contactEmail: z.string().optional(),
    contactPhone: z.string().optional(),
    facebookUrl: z.string().optional(),
    instagramUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    tiktokUrl: z.string().optional(),
    spotifyUrl: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    content: z.string().optional(),
    heroTagline: z.string().optional(),
    spotifyEmbedUrl: z.string().optional(),
    youtubeVideoUrl: z.string().optional(),
    showInNav: z.boolean().default(true),
    navOrder: z.number().default(10),
  }),
});

export const collections = { shows, settings, pages };
