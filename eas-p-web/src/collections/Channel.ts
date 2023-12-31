import { CollectionConfig } from 'payload/types'

const Channel: CollectionConfig = {
  slug: 'channels',
  fields: [
    {
        name: "channelName",
        label: "Name",
        type: "text",
        required: true,
    },
    {
        name: "members",
        label: "Members",
        type: "relationship",
        relationTo: "users",
        hasMany: true,
    },
    {
        name: "messages",
        label: "Messages",
        type: "relationship",
        relationTo: "messages",
        hasMany: true,
    }
  ],
  hooks: {
    beforeChange: [
        ({ req, operation, data}) => {
            if(operation == "create") {
                if(req.user) {
                    data.members = [req.user.id]
                    return data
                }
            }
        }
    ],
    beforeRead: [
        ({ req, doc, query}) => {
            if(req.user) {
                query.where = {
                    members: req.user.id,
                };
                return doc;
            }
        }
    ]
  }
}

export default Channel
