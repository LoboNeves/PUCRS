require("dotenv").config();
const createApp = require("./app");
const db = require("./config/db");

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'PUCRS-Aula5';

(async () => {
  try {
    await db.connect(MONGO_URI, DB_NAME);
    const app = createApp();
    app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

    process.on('SIGINT', async () => {
      console.log('Closing MongoDB connection');
      await db.close();
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  } catch (e) {
    console.error("Failed to start application: ", e);
    process.exit(1);
  }
})();



