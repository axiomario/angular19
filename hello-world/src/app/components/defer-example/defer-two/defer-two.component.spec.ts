import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferTwoComponent } from './defer-two.component';

describe('DeferTwoComponent', () => {
  let component: DeferTwoComponent;
  let fixture: ComponentFixture<DeferTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
