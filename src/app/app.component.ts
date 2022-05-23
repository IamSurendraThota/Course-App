import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-app';
  constructor(private fs: Firestore) {
    // let testCollection = collection(fs, 'test');
    // collectionData(testCollection).subscribe(items => {
    //   console.log(items);
    // });
  }
}
