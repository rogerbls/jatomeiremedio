import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorarioFormPage } from './horario-form.page';

describe('HorarioFormPage', () => {
  let component: HorarioFormPage;
  let fixture: ComponentFixture<HorarioFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorarioFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
