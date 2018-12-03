import { ErrortypeModule } from './errortype.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ErrortypeModule', () => {
    let formModule: ErrortypeModule;

    beforeEach(() => {
        formModule = new ErrortypeModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
