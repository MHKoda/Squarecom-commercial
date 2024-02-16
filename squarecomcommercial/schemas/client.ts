import {defineType} from 'sanity'

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'nomclient',
      title: 'Nom du client',
      type: 'string',
    },
    {
      name: 'typestructure',
      title: 'Type de structure',
      type: 'string',
      options: {
          list: [
              {title: 'Privé', value: 'prive'},
              {title: 'Public', value: 'public'},
              {title: 'Association', value: 'association'},
              {title: 'ONG', value: 'ong'},
              {title: 'Particulier', value: 'particulier'},
          ],
      },
    },
    {
      name: 'logoclient',
      title: 'Logo du client',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    ],
  preview: {
    select: {
      title: 'nomclient',
    },
  },
})
