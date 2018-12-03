import {MySettingModule } from './my-setting.module';

describe('MySettingModule', () => {
    let blankPageModule: MySettingModule;

    beforeEach(() => {
        blankPageModule = new MySettingModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
