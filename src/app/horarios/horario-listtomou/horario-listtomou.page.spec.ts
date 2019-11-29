import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorarioListtomouPage } from './horario-listtomou.page';

describe('HorarioListtomouPage', () => {
  let component: HorarioListtomouPage;
  let fixture: ComponentFixture<HorarioListtomouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioListtomouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorarioListtomouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
