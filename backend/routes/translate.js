const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.post("/", async (req, res) => {
    const { text, source, target } = req.body;

    try {
        const response = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ q: text, source, target, format: "text" }),
        });

        const data = await response.json();
        res.json({ translatedText: data.translatedText });
    } catch (error) {
        res.status(500).json({ error: "Translation failed" });
    }
});

module.exports = router;
