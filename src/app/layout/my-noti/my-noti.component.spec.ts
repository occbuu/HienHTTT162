import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotiComponent } from './my-noti.component';

describe('MyNotiComponent', () => {
    let component: MyNotiComponent;
    let fixture: ComponentFixture<MyNotiComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [MyNotiComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(MyNotiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
