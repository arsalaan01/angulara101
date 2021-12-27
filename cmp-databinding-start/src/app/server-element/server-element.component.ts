import {
  Component,
  Input,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation, ElementRef, ViewChild, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // to prohibit the view encapsulation of this server-element component so that each element doesn't get it's own differentiating attribute in this component
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild {
  // @Input decorator is used to take input from it parent component 'srvElement is alias for element so outside this component elements can only be accessible using alias only'
  @Input('srvElement') element: {type: string, name: string,content: string};
  @Input() name: string;
  @ViewChild('heading',{static: true}) header: ElementRef;
  @ContentChild('contentParagraph',{static: true}) paragraph: ElementRef;
  constructor() {
     console.log('Constructor called');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }

  descendants: boolean;
  emitDistinctChangesOnly: boolean;
  first: boolean;
  isViewQuery: boolean;
  read: any;
  selector: any;

}
