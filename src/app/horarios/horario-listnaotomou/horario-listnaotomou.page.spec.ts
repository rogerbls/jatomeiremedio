import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorarioListnaotomouPage } from './horario-listnaotomou.page';

describe('HorarioListnaotomouPage', () => {
  let component: HorarioListnaotomouPage;
  let fixture: ComponentFixture<HorarioListnaotomouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioListnaotomouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorarioListnaotomouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
