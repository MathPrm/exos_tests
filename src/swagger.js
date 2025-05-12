import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Users',
    version: '1.0.0',
    description: 'Documentation de l\'API de gestion d\'utilisateurs',
    contact: {
      name: 'Support API',
      url: 'https://example.com/support',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Serveur de développement',
    },
  ],
  tags: [
    {
      name: 'Users',
      description: 'Opérations de gestion des utilisateurs',
    },
  ],
  components: {
    schemas: {
      User: {
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: {
            type: 'integer',
            description: 'Identifiant unique de l\'utilisateur',
            example: 1,
          },
          name: {
            type: 'string',
            description: 'Nom de l\'utilisateur',
            example: 'Alice',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Message d\'erreur',
            example: 'Utilisateur non trouvé',
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/server.js'], // Chemin vers les fichiers contenant les commentaires JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec; 