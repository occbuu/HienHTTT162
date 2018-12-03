import { NotiNewModule } from './noti-new.module';

describe('LineViewModule', () => {
    let blankPageModule: NotiNewModule;

    beforeEach(() => {
        blankPageModule = new NotiNewModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
