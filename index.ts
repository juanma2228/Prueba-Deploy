import server from "./src/app";
const { conn } = require("./src/db");
const { PORT } = process.env
import {
  setData,
  setOffers,
  setProposals,
  setPortfolios,
  setReview,
} from "./data";
/* const setData =require('./data');
const setOffersAndProposals =require('./data'); */

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    await setData();
    await setOffers();
    await setProposals();
    await setPortfolios();
    await setReview();
  });
});
