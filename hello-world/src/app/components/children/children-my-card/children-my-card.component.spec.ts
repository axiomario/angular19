import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenMyCardComponent } from './children-my-card.component';

describe('ChildrenMyCardComponent', () => {
  let component: ChildrenMyCardComponent;
  let fixture: ComponentFixture<ChildrenMyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenMyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenMyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
