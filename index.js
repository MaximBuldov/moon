const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');

const PORT = config.get('port') || 5000;

const app = express();

app.use(express.json({ extended: true }))

const username = encodeURIComponent(config.get('login'));
const password = encodeURIComponent(config.get('password'));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/order', require('./routes/order.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


async function start() {
    try {
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.dwloq.mongodb.net/moon?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log(`server start ${PORT}`)
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start();