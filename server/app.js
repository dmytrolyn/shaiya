require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const compression = require('compression');

const app = express();

const authRouter = require('./routers/auth');
const ranksRouter = require('./routers/ranks');
const guildsRouter = require('./routers/guilds');
const recentRouter = require('./routers/recent');
const profileRouter = require('./routers/profile');
const newsRouter = require('./routers/news');
const shopRouter = require('./routers/shop');

app.use(compression());
app.use(express.static('public'));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/ranks', ranksRouter);
app.use('/api/v1/guilds', guildsRouter);
app.use('/api/v1/recent', recentRouter);
app.use('/api/v1/profile', profileRouter);
app.use('/api/v1/news', newsRouter);
app.use('/api/v1/shop', shopRouter);

async function start() {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to port: ${process.env.PORT}`)
        })
    } catch(err) {
        console.log(err);
    }
}

start();