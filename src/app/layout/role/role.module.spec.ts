import { RoleModule } from './role.module';

describe('RoleModule', () => {
    let blankPageModule: RoleModule;

    beforeEach(() => {
        blankPageModule = new RoleModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
