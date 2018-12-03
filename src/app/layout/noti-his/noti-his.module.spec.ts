import { NotiHisModule } from './noti-his.module';

describe('NotiHisModule', () => {
    let blankPageModule: NotiHisModule;

    beforeEach(() => {
        blankPageModule = new NotiHisModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
