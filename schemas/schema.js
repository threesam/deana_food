// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import recipe from './documents/recipe'
import category from './documents/category'
import post from './documents/post'
import author from './documents/author'

// object schemas
import blockContent from './objects/blockContent'
import imageBlock from './objects/imageBlock'
import ingredient from './objects/ingredient'
import utensil from './objects/utensil'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    recipe,
    post,
    author,
    category,
    // objects
    blockContent,
    imageBlock,
    ingredient,
    utensil
  ]),
})
