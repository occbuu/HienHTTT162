import { ErrorReportModule } from './error-report.module';

describe(' ErrorReportModule', () => {
    let chartsModule: ErrorReportModule;

    beforeEach(() => {
        chartsModule = new ErrorReportModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
