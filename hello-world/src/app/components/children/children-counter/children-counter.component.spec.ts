import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCounterComponent } from './children-counter.component';

describe('ChildrenCounterComponent', () => {
  let component: ChildrenCounterComponent;
  let fixture: ComponentFixture<ChildrenCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
