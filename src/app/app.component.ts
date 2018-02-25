import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app';
  productDetails: any = [];
  isVisible: boolean = false;
  public ProductHeader = [{ name: 'Hp' }, { name: 'Dell' }, { name: 'Lenovo' }];
  public Products = [
    { name: 'Hp', title: 'HP ENVY Laptop - 15t touch', price: '1099', store: 'Best Buy', model: '15-BS013DX' },
    { name: 'Dell', title: 'Dell Laptop', price: '700', store: 'Amazon', model: 'I7378-3000SLV-PUS' },
    { name: 'Lenovo', title: 'Lenovo Touch-Screen Laptop', price: '670', store: 'Target', model: '81A40025US' },
    { name: 'Hp', title: 'HP OfficeJet Pro 6978 All-in-One Printer', price: '100', store: 'Target', model: 'T0F29A#B1H' },
    { name: 'Hp', title: 'HP Laptop - 17t touch ', price: '420', store: 'Target', model: '1EZ78AV_1' },
    { name: 'Dell', title: 'Dell - XPS 27" Touch-Screen All-In-One', price: '670', store: 'Target', model: 'BBY-311C3FX' },
    { name: 'Dell', title: 'Dell - Inspiron 21.5" Touch-Screen All-In-One', price: '469.90', store: 'Target', model: 'I3265-A067BLK-PUS' },
    { name: 'Lenovo', title: 'Lenovo - 520-24AST 23.8" Touch-Screen All-In-One', price: '679.99', store: 'Target', model: 'F0D3000EUS' },
    { name: 'Dell', title: 'Dell - XPS 2-in-1 13.3" Touch-Screen Laptop', price: '1199.99', store: 'Target', model: 'XPS9365-7086SLV-PUS' }
  ];

  SearchProduct(name: string) {
    this.isVisible = true;
    this.productDetails = this.Products.filter(p => p.name == name);
  }
}
