import {defineType} from 'sanity'

export default defineType({
  name: 'rubrique',
  title: 'Rubrique',
  type: 'document',
  fields: [
    {
      name: 'nomrubrique',
      title: 'Nom du rubrique',
      type: 'string',
    },
    {
      name: 'format',
      title: 'Formats proposés',
      type: 'string',
    },
    {
      name: 'support',
      title: 'Supports disponibles',
      type: 'string',
    },
    {
      name: 'tarif',
      title: 'Tarifs',
      type: 'string'
    },
    {
      name: 'imgillu',
      title: 'Image d\'illustration',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'altimgillu',
      title: 'Texte de remplacement',
      type: 'string'
    }
    ],
  preview: {
    select: {
      title: 'nomrubrique',
    },
  },
})