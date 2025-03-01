const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'Shopping Cart API',
      version: '1.0.0',
      description: 'API para um carrinho de compras',
    },
    servers: [
      {
        url: 'http://localhost:3000', 
        description: 'Servidor Local',
      },
    ],
  },
  apis: ['./src/routes/*.js'], 
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
