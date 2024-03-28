import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '../../../board-wrappers/page-wrapper';
import { ThankYouPage } from '../../../../components/thank-you-page/thank-you-page';

export default createBoard({
    name: 'Page Thank You',
    Board: () => (
        <PageWrapper path="/thank-you?orderId=1234567">
            <ThankYouPage />
        </PageWrapper>
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
