import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainscreamComponent } from './mainscream.component';

describe('MainscreamComponent', () => {
  let component: MainscreamComponent;
  let fixture: ComponentFixture<MainscreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainscreamComponent]
    });
    fixture = TestBed.createComponent(MainscreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
