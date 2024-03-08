import {defineType} from 'sanity'

export default defineType({
  name: 'projet',
  title: 'Projets',
  type: 'document',
  fields: [
    {
        name: 'depliantservice',
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
        type: 'reference', // Utilisation du type de référence
        to: [{ type: 'rubrique' }], // Spécification du type de document référencé
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

    // // // // // // // // // // // //
    // // // //Partie Print // // // //
    // // // // // // // // // // // //    

    {
        name: 'supportproj',
        title: 'Support',
        type: 'string',
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'print';
        },
    },
    {
        name: 'formatproj',
        title: 'Format',
        type: 'string',
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'print';
        },
    },
    {
        name: 'colorimetrie',
        title: 'Mode colorimétrique',
        type: 'string',
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'print';
        },
    },
    {
        name: 'impression',
        title: 'Méthode d\'impression',
        type: 'string',
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return !(depliantserviceValue === 'print' || depliantserviceValue === 'marqpub');
        },
    },
    {
        name: 'finitions',
        title: 'Finitions',
        type: 'string',
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'print';
        },
    },

    // // // //  // // // //  // // // //
    // // // // Partie Dev web // // // //
    // // // //  // // // //  // // // //
    
    {
        name: 'liensite',
        title: 'Lien du site',
        type: 'url',
        options: {
            hotspot: true,
        },
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'devweblogi';
        },
    },
    {
        name: 'cms',
        title: 'CMS utilisé',
        type: 'string',
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'devweblogi';
        },
    },
    {
        name: 'fonctionnalite',
        title: 'Fonctionnalités',
        type: 'string',
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'devweblogi';
        },
    },

    // // // //  // // // //  // // // //
    // // // // Partie Motion // // // //
    // // // //  // // // //  // // // //

    {
        name: 'lienmotion',
        title: 'Lien du motion design',
        type: 'string',
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'motion';
        },
    },
    ],
  preview: {
    select: {
      title: 'nomproj',
      media: 'image',
    },
  },
})
