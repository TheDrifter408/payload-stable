import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name:"name",
      type:"text"
    },
    {
      name:"role",
      type:"relationship",
      relationTo:['role'],
      saveToJWT:true,
    }
  ],
}
