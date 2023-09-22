import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersionPartComponent } from './version.part';

describe('VersionPart', () => {
  let component: VersionPartComponent;
  let fixture: ComponentFixture<VersionPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionPartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VersionPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
