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
    bio: z.string(),
    contactEmail: z.string(),
    instagramUrl: z.string().optional(),
    spotifyUrl: z.string().optional(),
  }),
});

export const collections = { shows, settings };
