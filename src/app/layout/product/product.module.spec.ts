import { ProductModule } from './product.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ProductModule', () => {
    let formModule: ProductModule;

    beforeEach(() => {
        formModule = new ProductModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
