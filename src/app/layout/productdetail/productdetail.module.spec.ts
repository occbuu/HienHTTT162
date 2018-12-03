import { ProductdetailModule } from './productdetail.module';

describe('ProductdetailModule', () => {
    let formModule: ProductdetailModule;

    beforeEach(() => {
        formModule = new ProductdetailModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
