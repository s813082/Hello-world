import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.component.html',
  styleUrls: ['./pratice.component.css']
})
export class PraticeComponent implements OnInit {

  Authors = ["author ", "author ", "author "]
  Book = [{
    'BookName' : 'Harry Potter',
    'SerialName' : [
      {
        'Serial' : 'Harry Potter and the Philosopher\'s Stone'
      },
      {
        'Serial' : 'Harry Potter and the Chamber of Secrets'
      },
      {
        'Serial' : 'Harry Potter and the Prisoner of Azkaban '
      },
      {
        'Serial' : 'Harry Potter and the Goblet of Fire '
      },
      {
        'Serial' : 'Harry Potter and the Order of the Phoenix '
      },
      {
        'Serial' : 'Harry Potter and the Half-Blood Prince'
      },
      {
        'Serial' : 'Harry Potter and the Deathly Hallows '
      }
    ]  
  },
  {
    'BookName' : 'Hunger Game',
    'SerialName' : [
      {
        'Serial' : 'The Hunger Games '
      },
      {
        'Serial' : 'Catching Fire '
      },
      {
        'Serial' : 'Mockingjay '
      }
    ]
  }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
