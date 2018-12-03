import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiNewComponent } from './noti-new.component';

describe('NotiNewComponent', () => {
    let component: NotiNewComponent;
    let fixture: ComponentFixture<NotiNewComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [NotiNewComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NotiNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
