import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  secondes: number = 0;
  counterSubscribtion: any;

  ngOnInit() {
    this.counterSubscribtion = interval(1000).subscribe((value: number) => {
      this.secondes = value;
    }, 
    (error: any) => {
      throw new Error('Error on counter')
    },
    () => {
      console.log('Complete ');
      
    });
  }

  ngOnDestroy(): void {
      this.counterSubscribtion.unsubscribe();
  }
}
