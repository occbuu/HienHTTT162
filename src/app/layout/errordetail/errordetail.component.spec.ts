import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  ErrordetailComponent } from './errordetail.component';

describe('ErrordetailComponent', () => {
    let component: ErrordetailComponent;
    let fixture: ComponentFixture<ErrordetailComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ErrordetailComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrordetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
