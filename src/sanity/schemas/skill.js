export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'icon', title: 'Icon URL', type: 'url' },
        { name: 'color', title: 'Color', type: 'string', description: 'Hex color code' },
        { name: 'category', title: 'Category', type: 'string' },
        { name: 'order', title: 'Order', type: 'number' },
    ],
    orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
};
