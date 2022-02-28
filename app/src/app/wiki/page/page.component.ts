import { Component, Input } from '@angular/core';

@Component({
  selector: 'wiki-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

	@Input() data;
  @Input() allPages;
  @Input() allCategories;

}
