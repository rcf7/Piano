import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaMatiComponent } from './prueba-mati.component';

describe('PruebaMatiComponent', () => {
  let component: PruebaMatiComponent;
  let fixture: ComponentFixture<PruebaMatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaMatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaMatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
