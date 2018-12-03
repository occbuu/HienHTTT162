import { SettingModule } from './setting.module';

describe('SettingModule', () => {
    let blankPageModule: SettingModule;

    beforeEach(() => {
        blankPageModule = new SettingModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
