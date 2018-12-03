import { NotiDetailModule } from './noti-detail.module';

describe('NotiDetailModule', () => {
    let blankPageModule: NotiDetailModule;

    beforeEach(() => {
        blankPageModule = new NotiDetailModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
