const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/cars", {
      target: "http://localhost:5000",
      secure: false,
    })
  );
};
