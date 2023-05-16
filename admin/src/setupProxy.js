const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://e7gez-be.onrender.com/api",
      changeOrigin: true,
    })
  );
};
