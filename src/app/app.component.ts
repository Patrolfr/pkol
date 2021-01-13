import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sklepfrontend';

  ngOnInit(): void {
    const node = document.createElement('script');
    node.src = 'https://stpc.pkoleasing.pl/leasing/assets/widget/pkol-installment-widget.js';
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(node);
  }
}
