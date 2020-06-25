import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEpisodiosComponent } from './detalles-episodios.component';

describe('DetallesEpisodiosComponent', () => {
  let component: DetallesEpisodiosComponent;
  let fixture: ComponentFixture<DetallesEpisodiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesEpisodiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
