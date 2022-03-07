export class Beer {
  _id: number | undefined;
  name: string | undefined;
  tagline: string | undefined;
  image_url: string | undefined;
  abv: number | undefined;
  ibu: number | undefined;
  srm: number | undefined;
  ingredients: Array<Object> = [];
}
