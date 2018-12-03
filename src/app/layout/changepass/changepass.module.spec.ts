import { ChangepassModule } from './changepass.module';

describe('ChangepassModule', () => {
    let blankPageModule: ChangepassModule;

    beforeEach(() => {
        blankPageModule = new ChangepassModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
