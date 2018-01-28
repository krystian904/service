import { Component, OnInit , Input} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {

  }

  send(text : string){
    this.messageService.add(text);

  }

  druk(){
    this.messageService.print();

  }
}
