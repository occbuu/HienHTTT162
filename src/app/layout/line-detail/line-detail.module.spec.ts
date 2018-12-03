import { LineDetailModule } from './line-detail.module';

describe('LineDetailModule', () => {
    let blankPageModule: LineDetailModule;

    beforeEach(() => {
        blankPageModule = new LineDetailModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
