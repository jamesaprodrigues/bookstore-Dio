import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  livros: any;
  bookService: BooksService;

  constructor(bookServise : BooksService) { 

    this.bookService = bookServise;
  }

  ngOnInit(): void {

    this.livros =this.bookService.getBook().subscribe((data =>{

      this.livros=data;

    }))

  }

}
