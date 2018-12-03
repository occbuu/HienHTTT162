import { RuledetailModule } from './ruledetail.module';

describe('RuledetailModule', () => {
    let formModule: RuledetailModule;

    beforeEach(() => {
        formModule = new RuledetailModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
