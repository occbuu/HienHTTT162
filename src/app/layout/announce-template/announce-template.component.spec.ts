import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceTemplateComponent } from './announce-template.component';

describe('AnnounceTemplateComponent', () => {
    let component: AnnounceTemplateComponent;
    let fixture: ComponentFixture<AnnounceTemplateComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [AnnounceTemplateComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AnnounceTemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
