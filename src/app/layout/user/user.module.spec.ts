import { UserModule } from './user.module';

describe('UserModule', () => {
    let blankPageModule: UserModule;

    beforeEach(() => {
        blankPageModule = new UserModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
