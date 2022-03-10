import LazyRating from "./LazyRating";

export default {
    title: 'atoms/Lazy Rating',
    component: LazyRating
};

export const base = () => (
    <LazyRating score={4} />
)