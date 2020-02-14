const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Test API",
      version: "1.0.0",
      description: "Test Express API with autogen swagger doc",
    },
    servers: ["http://localhost:3000"],
    basePath: "/",
  },
  apis: [".routes/*.js"],
};

const swaggerSpecDocs = swaggerJSDoc(swaggerOptions);

module.exports = (app)=> {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecDocs));
}

