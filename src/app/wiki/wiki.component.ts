import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.sass']
})
export class WikiComponent implements OnInit, OnDestroy {
items: any[];
site: string;
  constructor(private statusService: StatusService) { 
    this.statusService.deactivateUser();
    this.items = [
      'https://en.wikipedia.org/wiki/Wormhole',
      'https://en.wikipedia.org/wiki/Proxima_Centauri',
      'https://en.wikipedia.org/wiki/Black_hole',
      'https://en.wikipedia.org/wiki/Asteroid ',    
      'https://en.wikipedia.org/wiki/Comet',
      'https://en.wikipedia.org/wiki/Centaur_(minor_planet)',
      'https://en.wikipedia.org/wiki/Jupiter_trojan',
      'https://en.wikipedia.org/wiki/Colonization_of_Mars'

    ]

    this.site = this.items[Math.floor(Math.random()*this.items.length)]
  }

  ngOnInit(): void {
    window.open(this.site, '_self')
    self.close();
  }

  ngOnDestroy() {
    window.open(this.site, '_self');
    self.close();
  }

}
