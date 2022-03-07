import * as tinycolor from 'tinycolor2';
import { Instance } from 'tinycolor2';

export class Beer {
  _id: number | undefined;
  name: string | undefined;
  tagline: string | undefined;
  image_url: string | undefined;
  abv: number | undefined;
  ibu: number | undefined;
  srm: number | undefined;
  ingredients: Object[] = [];
  first_brewed: string | undefined;

  // this function transforms srm value to color
  static getColor(srm: number = 0): Instance {
    if (!srm) {
      let bodyStyles = window.getComputedStyle(document.body);
      return new tinycolor(bodyStyles.getPropertyValue('--bs-secondary'));
    }

    const color = new tinycolor('#F7D281');
    color.spin(-srm + 10); // this gives reddish tone
    return color.darken(srm);
  }
}
