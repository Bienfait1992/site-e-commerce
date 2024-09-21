const express = require('express');
// const {PrismaClient} = require('@prisma/client');
// const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

const app = express();





// Route de base
app.get('/', (req, res) => {
  res.send('Gloire à Dieu');
});

// app.post('/api/users', async (req, res)=>{
//   const {email, nom, password} = req.body;
//   try{
//     const user = await prisma.user.create({
//       data:{
//         email,
//         nom,
//         password
//       },
//     });
//     res.status(201).json(user);
//   }catch (error){
//     res.status(400).json({error: 'echec de creation'});
//   }
// });

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`le server ecoute sur le port ${PORT}`);
});
