const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/translate", require("./routes/translate"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
