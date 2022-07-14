import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {


  @Input() productItem: any;
  @Output() addToCart = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
