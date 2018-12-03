import { AnnounceTemplateModule } from './announce-template.module';

describe('AnnounceTemplateModule', () => {
    let blankPageModule: AnnounceTemplateModule;

    beforeEach(() => {
        blankPageModule = new AnnounceTemplateModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
