import { canCreate } from '@/access/DynamicAccess'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: canCreate('admin'),
    read:() => true,
    update:() => true,
    delete: () => true,
  },
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
