export default {
  name:'ingredient',
  title: 'Ingredient',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'amount',
      type: 'string',
      title: 'Amount'
    },
    {
      title: 'Unit',
      name: 'unit',
      type: 'string',
      options: {
        list: [
          {title: 'pinch', value: 'pinch'},
          {title: 'teaspoon', value: 'teaspoon'},
          {title: 'tablespoon', value: 'tablespoon'},
          {title: 'ounce', value: 'ounce'},
          {title: 'cup', value: 'cup'},
          {title: 'pint', value: 'pint'},
          {title: 'quart', value: 'quart'},
          {title: 'gallon', value: 'gallon'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }
  ],
  preview: {
    select: {
      name: 'name',
      amount: 'amount',
      unit: 'unit',
    },
    prepare(selection) {
      const {name, amount, unit} = selection
      const isPlural = +amount > 1
      return Object.assign({}, selection, {
        title: name,
        subtitle: `${amount} ${unit ?? ''}${unit && isPlural ? 's' : ''}`
      })
    },
  },
}