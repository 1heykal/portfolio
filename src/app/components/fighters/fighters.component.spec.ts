import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightersComponent } from './fighters.component';

describe('MainComponent', () => {
  let component: FightersComponent;
  let fixture: ComponentFixture<FightersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FightersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
