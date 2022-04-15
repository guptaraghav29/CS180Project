const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/cars", {
      target: "http://localhost:3001",
      secure: false,
    })
  );
};
