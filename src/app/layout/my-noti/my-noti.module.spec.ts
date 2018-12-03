import { MyNotiModule } from './my-noti.module';

describe('MyNotiModule', () => {
    let blankPageModule: MyNotiModule;

    beforeEach(() => {
        blankPageModule = new MyNotiModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
