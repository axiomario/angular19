import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferOneComponent } from './defer-one.component';

describe('DeferOneComponent', () => {
  let component: DeferOneComponent;
  let fixture: ComponentFixture<DeferOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
