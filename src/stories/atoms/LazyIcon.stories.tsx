import LazyIcon from './LazyIcon';

export default {
    title: 'atoms/LazyIcon',
    component: LazyIcon
};

const alphabetCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export const base = () => <LazyIcon name={alphabetCharacters[Math.floor(Math.random() * alphabetCharacters.length)]} />