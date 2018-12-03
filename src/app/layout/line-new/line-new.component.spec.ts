import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineNewComponent } from './line-new.component';

describe('BlankPageComponent', () => {
    let component: LineNewComponent;
    let fixture: ComponentFixture<LineNewComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [LineNewComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LineNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
