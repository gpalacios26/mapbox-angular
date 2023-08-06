import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPageComponent } from './properties-page.component';

describe('PropertiesPageComponent', () => {
  let component: PropertiesPageComponent;
  let fixture: ComponentFixture<PropertiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesPageComponent]
    });
    fixture = TestBed.createComponent(PropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
