import { canCreate, canDelete, canRead, canUpdate } from '@/access/DynamicAccess'
import { isAdmin } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: canCreate("users"),
    read: canRead("users"),
    update:canUpdate("users"),
    delete: canDelete("users"),
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    cookies:{
      sameSite:'None',
      secure:false,
    }
  },
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
