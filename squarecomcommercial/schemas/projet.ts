import {defineType} from 'sanity'

export default defineType({
  name: 'projet',
  title: 'Projets',
  type: 'document',
  fields: [
    {
        name: 'service',
        title: 'Choisissez le service',
        type: 'reference',
        to: [{ type: 'services' }],
    },
    {
        name: 'client',
        title: 'Client',
        type: 'reference', // Utilisation du type de référence
        to: [{ type: 'client' }], // Spécification du type de document référencé
    },
    {
        name: 'rubrique',
        title: 'rubrique',
        type: 'reference',
        to: [{ type: 'rubrique' }],
    },
    {
        name: 'nomproj',
        title: 'Nom du projet',
        type: 'string',
    },
    {
        name: 'slugproj',
        title: 'Slug du projet',
        type: 'slug',
        options: {
        source: 'nomproj',
        maxLength: 96,
        },
    },
    {
        name: 'imageproj',
        title: 'Image du projet',
        type: 'image',
        options: {
        hotspot: true,
        },
    },
    {
        name: 'altimage',
        title: 'Texte de remplacement',
        type: 'string',
    },
    ],
  preview: {
    select: {
      title: 'nomproj',
      media: 'image',
    },
  },
})
