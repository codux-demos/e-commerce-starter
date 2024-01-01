import { createBoard } from '@wixc3/react-board';
import { PageNoRouting } from '../board-wrappers/page-no-routing';
import { Test } from '../../components/test/test';

export default createBoard({
    name: 'TestPage',
    Board: () => (
        <PageNoRouting>
            <Test />
        </PageNoRouting>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
});
