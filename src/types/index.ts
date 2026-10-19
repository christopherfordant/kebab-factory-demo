export type CategoryId = 'all' | 'kebabs' | 'tacos' | 'burgers' | 'menus';

export interface MenuItem {
  id: string;
  name: string;
  category: 'kebabs' | 'tacos' | 'burgers' | 'menus';
  price: string;
  badge?: string;
  description: string;
  ingredients: string[];
  meatOptions?: string[];
  spiciness?: 0 | 1 | 2 | 3;
  image?: string;
  isVegetarian?: boolean;
}

export interface DaySchedule {
  day: string;
  lunch: string;
  dinner: string;
  isClosed?: boolean;
}
