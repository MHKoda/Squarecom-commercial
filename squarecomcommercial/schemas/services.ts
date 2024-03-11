import {defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'nomservice',
      title: 'Nom du service',
      type: 'string',
    },
    {
      name: 'imageservice',
      title: 'Image du service',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'pictoservice',
      title: 'Pictogramme du service',
      type: 'image',
    },
    {
      name: 'phraseaccroche',
      title: 'Phrase d\'accroche du service',
      type: 'string',
      options: {
        maxLenght: 40,
      }
    },
    {
      name: 'descriptionservice',
      title: 'Description du service',
      type: 'array',
      of: [
        {
          title: 'block',
          type: 'block',
        }
      ]
    }
  ],
})