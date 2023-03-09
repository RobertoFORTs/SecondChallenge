export default  {
  swaggerDefinition: {
    info: {
      title: "Second Challenge",
      description: "Back-end Journey (Node.js) - AWS Cloud Context - second challenge API",
      version: "1.0.0",
      contact: {
        name: "test",
        url: "http://www.swagger.io/support",
        email: "test@gmail.com"
      },
      servers: ["http://localhost:8000/"]
    }
  },
  swagger: "4.0",
  apis: ["./routes/*.js"]
};

