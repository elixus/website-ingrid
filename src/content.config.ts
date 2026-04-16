import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const heroCollection = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/hero" }),
	schema: z.object({
		name: z.string(),
		title: z.string(),
		tagline: z.string(),
		subtitle: z.string().optional(),
		contact: z.string(),
	}),
});

const aboutCollection = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/about" }),
	schema: z.object({
		heading: z.string(),
		credentials: z.object({
			university: z.string(),
			license: z.string(),
			therapyTypes: z.array(z.string()),
		}),
	}),
});

const servicesCollection = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/services" }),
	schema: z.object({
		heading: z.string(),
	}),
});

const topicsCollection = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/topics" }),
	schema: z.object({
		heading: z.string(),
	}),
});

const practicalCollection = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/practical" }),
	schema: z.object({
		heading: z.string(),
		rates: z.object({
			standard: z.object({ amount: z.number(), label: z.string() }),
			evening: z.object({
				amount: z.number(),
				label: z.string(),
				time: z.string(),
			}),
			effectiveDate: z.string(),
		}),
		session: z.object({
			duration: z.string(),
			payment: z.string(),
			cancellation: z.string(),
		}),
		noConsultations: z.string(),
		languages: z.array(z.string()),
	}),
});

const contactCollection = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/contact" }),
	schema: z.object({
		heading: z.string(),
		address: z.object({
			street: z.string(),
			city: z.string(),
			postal: z.string(),
		}),
		phone: z.object({
			number: z.string(),
			hours: z.string(),
			sms: z.boolean(),
		}),
		email: z.string(),
	}),
});

export const collections = {
	hero: heroCollection,
	about: aboutCollection,
	services: servicesCollection,
	topics: topicsCollection,
	practical: practicalCollection,
	contact: contactCollection,
};
