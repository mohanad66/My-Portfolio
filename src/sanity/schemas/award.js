export default {
    name: 'award',
    title: 'Award',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'event', title: 'Event', type: 'string' },
        { name: 'organization', title: 'Organization', type: 'string' },
        { name: 'year', title: 'Year', type: 'string' },
        { name: 'icon', title: 'Icon', type: 'string', description: 'Emoji' },
        { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
        { name: 'order', title: 'Order', type: 'number' },
    ],
    orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
};
