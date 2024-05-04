import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwotPieChartComponent } from './swot-pie-chart.component';

describe('SwotPieChartComponent', () => {
  let component: SwotPieChartComponent;
  let fixture: ComponentFixture<SwotPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwotPieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwotPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
