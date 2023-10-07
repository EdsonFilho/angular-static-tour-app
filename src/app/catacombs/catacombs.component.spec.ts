import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatacombsComponent } from './catacombs.component';

describe('PlaylistComponent', () => {
  let component: CatacombsComponent;
  let fixture: ComponentFixture<CatacombsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatacombsComponent]
    });
    fixture = TestBed.createComponent(CatacombsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
