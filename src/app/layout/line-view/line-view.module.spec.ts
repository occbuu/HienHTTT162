import { LineViewModule } from './line-view.module';

describe('LineViewModule', () => {
    let blankPageModule: LineViewModule;

    beforeEach(() => {
        blankPageModule = new LineViewModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
