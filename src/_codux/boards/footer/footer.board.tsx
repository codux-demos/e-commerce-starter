import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';
import Theme_module from '../../../styles/theme.module.scss';

export default createBoard({
    name: 'Footer',
    Board: () => (
        <div style={{ width: '100vw' }} className={Theme_module.common}>
            <Footer />
        </div>
    ),
    isSnippet: true,
});
