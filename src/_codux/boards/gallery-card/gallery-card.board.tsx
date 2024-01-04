import { createBoard } from '@wixc3/react-board';
import { GalleryCard } from '../../../components/gallery-card/gallery-card';

export default createBoard({
    name: 'GalleryCard',
    Board: () => <GalleryCard
        description='Shel 50" Class LED 4K UHD Smart TV'
        currency="$"
        price={85}
        rating={4.8} />,
    isSnippet: true,
});
