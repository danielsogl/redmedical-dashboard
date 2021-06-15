import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackOverflowContentComponent } from './stack-overflow-content.component';

describe('StackOverflowContentComponent', () => {
  let component: StackOverflowContentComponent;
  let fixture: ComponentFixture<StackOverflowContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackOverflowContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackOverflowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
