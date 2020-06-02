import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploaderPage } from './uploader.page';

interface MockFile {
  name: string;
  body: string;
  mimeType: string;
}

const createFileFromMockFile = (file: MockFile): File => {
  const blob = new Blob([file.body], { type: file.mimeType }) as any;
  blob['lastModifiedDate'] = new Date();
  blob['name'] = file.name;
  return blob as File;
};

const createMockFileList = (files: MockFile[]) => {
  const fileList: FileList = {
      length: files.length,
      item(index: number): File {
          return fileList[index];
      }
  };
  files.forEach((file, index) => fileList[index] = createFileFromMockFile(file));

  return fileList;
};

describe('UploaderPage', () => {
  let component: UploaderPage;
  let fixture: ComponentFixture<UploaderPage>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


});
