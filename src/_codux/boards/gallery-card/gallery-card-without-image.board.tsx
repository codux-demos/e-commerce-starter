import { createBoard } from '@wixc3/react-board';
import { GalleryCard } from '../../../components/gallery-card/gallery-card';

export default createBoard({
    name: 'GalleryCard without image',
    Board: () => (
        <GalleryCard
            name='Shel 50" Class LED 4K UHD Smart TV'
            price={{ formatted: { price: '$85' } }}
            rating={4.1}
            ratingCount={2}
        />
    ),
    isSnippet: true,
});
