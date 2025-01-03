import { type SchemaTypeDefinition } from 'sanity'
import header from './header'
import displayproduct from './displayproduct'
import displayblog from './displayblog'
import shopproducts from './shopproducts'
import blogs from './blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header,displayproduct,displayblog,shopproducts,blogs],
}
