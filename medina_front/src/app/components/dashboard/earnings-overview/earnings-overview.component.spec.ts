import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsOverviewComponent } from './earnings-overview.component';

describe('EarningsOverviewComponent', () => {
  let component: EarningsOverviewComponent;
  let fixture: ComponentFixture<EarningsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarningsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarningsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
