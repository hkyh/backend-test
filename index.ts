import express from "express";
import dotenv from "dotenv";
import { initGame } from "./game";
import { gameRouter } from "./routes";

dotenv.config();

const app = express();
initGame();

app.use(express.json());

app.use('/game', gameRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});