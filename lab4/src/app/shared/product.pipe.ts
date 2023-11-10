import { Pipe, PipeTransform } from '@angular/core';
import { type Product } from './data';

function capitalize(value: string) {
  if (value.length === 0) return value;

  return `${value[0].toUpperCase()}${value.slice(1)}`;
}

@Pipe({
  name: 'product',
  standalone: true,
  pure: false,
})
export class ProductPipe implements PipeTransform {
  transform(value: Product): string {
    return `${capitalize(value.name)} (quantity: ${value.quantity})`;
  }
}
