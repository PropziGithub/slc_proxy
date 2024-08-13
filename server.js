const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

app.use(cors());

const proxyRoutes = [
  {
    route: "/SLweb-Pre-Qaul-A",
    target: "https://go.pardot.com/l/1061552/2024-04-11/bjqqcy",
  },
  {
    route: "/SLweb-Pre-Qaul-B",
    target: "https://go.pardot.com/l/1061552/2024-07-05/bjtyyx",
  },
  {
    route: "/SLweb-Application",
    target: "https://go.pardot.com/l/1061552/2024-07-11/bjv5bc",
  },
];

proxyRoutes.forEach(({ route, target }) => {
  app.use(
    route,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      followRedirects: true,
      pathRewrite: {
        [`^${route}`]: "",
      },
      onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader("Origin", "http://localhost:3001");
      },
      onProxyRes(proxyRes, req, res) {
        res.headers["Access-Control-Allow-Origin"] = "*";
        res.headers["Access-Control-Allow-Methods"] =
          "GET,POST,PUT,DELETE,OPTIONS";
        res.headers["Access-Control-Allow-Headers"] =
          "Content-Type, Authorization";
      },
    })
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
