import Post from './post.js';

import WebpackLogo from './assets/webpack-logo.png';

import './styles/style.scss';

const post = new Post('Webpack post title', WebpackLogo);

console.log('Post to string', post.toString());