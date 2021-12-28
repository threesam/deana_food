export default {
  type: 'document',
  name: 'recipe',
  title: 'Recipe',
  fields: [
    {
      name: 'title',
      type:'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      type: 'reference',
      name: 'author',
      to: [{type: 'author'}]
    },
    {
      name: 'equipment',
      title: 'Equipment',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: [{type: 'utensil'}]
        }
      ]
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'ingredient'}]
    },
    {
      name: 'instructions',
      type: 'blockContent',
      title: 'Instructions'
    },
    {
      type: 'reference',
      name: 'category',
      to: [{type: 'category'}]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
    },
    {
      type: 'imageBlock',
      title: 'Image',
      name: 'image'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'imageBlock',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}