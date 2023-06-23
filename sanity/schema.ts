import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { group } from './group'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, group],
}
