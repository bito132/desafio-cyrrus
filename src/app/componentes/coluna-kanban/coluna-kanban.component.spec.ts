import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaKanbanComponent } from './coluna-kanban.component';

describe('ColunaKanbanComponent', () => {
  let component: ColunaKanbanComponent;
  let fixture: ComponentFixture<ColunaKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColunaKanbanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColunaKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
