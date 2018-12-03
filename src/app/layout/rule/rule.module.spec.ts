import { RuleModule } from './rule.module';

describe('RuleModule', () => {
    let blankPageModule: RuleModule;

    beforeEach(() => {
        blankPageModule = new RuleModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
