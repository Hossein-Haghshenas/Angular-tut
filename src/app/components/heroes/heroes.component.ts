import { Component } from '@angular/core';
// Fake data
import { HEROES } from '../../mockHeroes';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  /*
  hero = 'Windstorm';
  */
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
