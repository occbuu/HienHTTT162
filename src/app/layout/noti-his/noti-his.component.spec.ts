import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiHisComponent } from './noti-his.component';

describe('NotiHisComponent', () => {
    let component: NotiHisComponent;
    let fixture: ComponentFixture<NotiHisComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [NotiHisComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NotiHisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
