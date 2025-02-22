const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour traiter les données JSON
app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes'); 

// Utilisation du routeur pour les livres sous la route /books
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);





app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
