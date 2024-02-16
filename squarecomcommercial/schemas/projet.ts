import {defineType} from 'sanity'

export default defineType({
  name: 'projet',
  title: 'Projets',
  type: 'document',
  fields: [
    {
        name: 'depliantservice',
        title: 'Choisissez le service',
        type: 'string',
        options: {
            list: [
                {title: 'Print', value: 'print'},
                {title: 'Marquage Publicitaire', value: 'marqpub'},
                {title: 'Visite Immersive', value: 'visimmer'},
                {title: 'Développement web et logiciel', value: 'devweblogi'},
                {title: 'Goodies', value: 'goodies'},
                {title: 'Réseaux et référencement', value: 'resref'},
                {title: 'Motion design', value: 'motion'},
                {title: 'Identité visuelle', value: 'idvisu'}
            ],
        },
    },
    {
        name: 'rubriquesprint',
        title: 'Rubriques print',
        type: 'string',
        options: {
            list: [
                {title: 'Affiche', value:'Affiche'},
                {title:'Flyer', value:'Flyer'},
                {title:'Dépliant', value:'Dépliant'},
                {title:'Carte de visite', value:'Carte de visite'},
                {title:'Bâche publicitaire', value:'Bâche publicitaire'},
                {title:'Roll-up', value:'Roll-up'},
            ],
        },
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'print';
        },
    },
    {
        name: 'rubriquesmarqpub',
        title: 'Rubriques Marquage Publicitaire',
        type: 'string',
        options: {
            list: [
                {title: 'Marquage de véhicule', value:'marqvehic'},
                {title:'Marquage textile', value:'marqtextil'},
                {title:'Enseigne', value:'enseigne'},
            ],
        },
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'marqpub';
        },
    },
    {
        name: 'rubriquesdevweblogi',
        title: 'Rubriques Développement web et logiciel',
        type: 'string',
        options: {
            list: [
                {title: 'Site e-commerce', value:'site-ecommerce'},
                {title:'Site vitrine', value:'site-vitrine'},
                {title:'Logiciel tiers', value:'logiciel-tiers'},
            ],
        },
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'devweblogi';
        },
    },
    {
        name: 'rubriquesgoodies',
        title: 'Rubriques Goodies',
        type: 'string',
        options: {
            list: [
                {title: 'Gourdes', value:'gourdes'},
                {title:'Stickers', value:'stickers'},
                {title:'Casquettes', value:'casquettes'},
            ],
        },
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'goodies';
        },
    },
    {
        name: 'rubriquesidvisu',
        title: 'Rubriques Identité visuelle',
        type: 'string',
        options: {
            list: [
                {title: 'Logo', value:'logo'},
                {title:'Charte Graphique', value:'charte-graphique'},
            ],
        },
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'idvisu';
        },
    },
    {
        name: 'rubriquesmotion',
        title: 'Rubriques Motion design',
        type: 'string',
        options: {
            list: [
                {title: 'Vidéo promotionnelle', value:'video-promotion'},
                {title:'Vidéo institutionnelle', value:'video-institution'},
                {title:'Vidéo explicative', value:'video-explicative'},
            ],
        },
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'motion';
        },
    },
    {
        name: 'rubriquesresref',
        title: 'Rubriques Réseaux et référencement',
        type: 'string',
        options: {
            list: [
                {title: 'Gestion de contenus', value:'gestion-contenu'},
                {title:'Référencement', value:'referencement'},
            ],
        },
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'resref';
        },
    },
    {
        name: 'rubriquesvisimmer',
        title: 'Rubriques Visite immersive',
        type: 'string',
        options: {
            list: [
                {title: 'Scan 3D', value:'scan-3d'},
                {title:'Mise à disposition', value:'mise-a-dispo'},
            ],
        },
        hidden: ({document}) => {
            const depliantserviceValue = document?.depliantservice;
            return depliantserviceValue !== 'visimmer';
        },
    },
    {
        name: 'client',
        title: 'Client',
        type: 'reference', // Utilisation du type de référence
        to: [{ type: 'client' }], // Spécification du type de document référencé
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
