const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour traiter les données JSON
app.use(express.json());

// Utilisation du routeur pour les livres sous la route /books
app.use('/books', bookRoutes);




app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
