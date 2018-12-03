import { LineNewModule } from './line-new.module';

describe('LineNewModule', () => {
    let blankPageModule: LineNewModule;

    beforeEach(() => {
        blankPageModule = new LineNewModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
