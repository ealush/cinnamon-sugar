import rand from './rand';

const categories = ['animals', 'people', 'nature', 'tech'];

function picsum() {
    return `https://placeimg.com/70/70/${rand(categories)}/${Math.floor(Math.random()*3)}/`
}

export default picsum;