import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CGN-Tools';
  fileToUpload:File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    let reader: FileReader = new FileReader();
    reader.readAsText(this.fileToUpload);
    reader.onload = (e) => {
      console.log(reader.result)
      let loadFile: string = <string>reader.result;
      loadFile = JSON.stringify(loadFile);
      if (loadFile !== '') {
        console.log('user - ',loadFile); 
      } else {
        console.log('NULL');
      }
    }
  }
}

