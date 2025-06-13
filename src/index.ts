import express from "express";
process.loadEnvFile();

const PORT = process.env.PORT;
const app = express();

app.get("/health", (_req, res) => {
  res.json({
    health: "Ok",
  });
});

app.listen(3000, () => {
  // oxlint-disable-next-line no-console
  console.log(`Server Listening on http://localhost:${PORT}`);
});
