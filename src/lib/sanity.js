import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 't95zoqi7',
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    apiVersion: '2024-08-17',
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source).width(1200).fit('max').auto('format');
}

export const queries = {
    projects: `*[_type == "project"] | order(order asc) {
        _id,
        title,
        category,
        purpose,
        whatIBuilt,
        tech,
        role,
        color,
        period,
        images,
        github_link,
        lesson
    }`,

    clientWork: `*[_type == "clientWork"] | order(order asc) {
        _id,
        title,
        role,
        type,
        badge,
        badgeColor,
        description,
        tech,
        color,
        images,
        link,
        linkLabel,
        caseStudy
    }`,

    skills: `*[_type == "skill"] | order(order asc) {
        _id,
        name,
        icon,
        color,
        category
    }`,

    awards: `*[_type == "award"] | order(order asc) {
        _id,
        title,
        event,
        organization,
        year,
        icon,
        images
    }`,
};

export async function fetchFromSanity(query) {
    try {
        return await client.fetch(query);
    } catch (error) {
        console.error('Sanity fetch error:', error);
        return null;
    }
}

export default client;
