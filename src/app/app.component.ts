import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoaderService } from '@service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  constructor(private store: Store<any>, public loaderService: LoaderService) {}

  ngOnInit() {
    this.store
      .select('wallet')
      .subscribe((state) => console.log('wallet state', state));
  }
}
