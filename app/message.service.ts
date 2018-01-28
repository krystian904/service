import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  texty : string[] = [];

  constructor() {

  }

  add(message : string ){
    this.texty.push(message);

  }

  clear(){
    this.texty = [];

  }

  print(){
    console.log(this.texty);
  }

}
