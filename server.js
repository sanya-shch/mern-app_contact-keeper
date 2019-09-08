const express = require('express');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (reg, res) => res.json({msg:'Welcome'}));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//
//     app.get('*', (req, res) =>
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     );
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
