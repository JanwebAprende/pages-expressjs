import { Router } from "express";

const router = Router();

router.get("", (req, res) => {
  res.render("index", {
    title: "JanWeb.com",
    deporteFavorito: ["Leer", "Futbol"],
    product: [
      { name: "Deskto Game", price: 300 },
      { name: "Deskto Game", price: 300 },
      { name: "Deskto Game", price: 300 },
      { name: "Deskto Game", price: 300 },
      { name: "Deskto Game", price: 300 },
    ],
  });
});

export default router;
