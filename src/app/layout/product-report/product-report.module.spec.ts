import {  ProductReportModule } from './product-report.module';

describe(' ProductReportModule', () => {
    let chartsModule: ProductReportModule;

    beforeEach(() => {
        chartsModule = new ProductReportModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
