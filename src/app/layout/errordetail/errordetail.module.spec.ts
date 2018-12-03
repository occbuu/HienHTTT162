import { ErrordetailModule } from './errordetail.module';

describe('ErrordetailModule', () => {
    let formModule: ErrordetailModule;

    beforeEach(() => {
        formModule = new ErrordetailModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
