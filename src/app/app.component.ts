import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  input: Object = { a: 5, b: { c: { d: 10 } }, e: { f: 19 } };
  output = [];
  mainString = "The program starts now";
  arrayOfStrings = ["The program", "Hello World", "now starts", "The program"]
  inputString: Array<string> = ["hello world", "hello world"];
  globalstring: string;
  ngOnInit() {
    //1 Difference between this and let
    //this : is a global scope object
    //let : is limited to block scope
    console.log(this.showDifference("Access me"));
    console.log(this.globalstring);
    //2 
    console.log("Input array : "+ JSON.stringify(this.inputString));
    console.log("character count map : " + this.getCharCountMap(this.inputString));
    //3 
    console.log("Object : "+JSON.stringify(this.input));
    console.log("keys of object : "+this.getKeys(this.input));
    //4
    console.log("reverse words of string using split and reverse : "+ this.reverseString(this.mainString));
    console.log("reverse words of string without split and reverse : "+ this.reverseInput(Array.from(this.mainString)));
    //5
    console.log("removed duplicates : "+ this.removeDuplicates(this.arrayOfStrings));
  }
  showDifference(data: string) {
    if (!!data) {
      this.globalstring = data;
      let blockString = data;
      console.log("Inside block->this data" + this.globalstring);
      console.log("Inside block->let data" + blockString);
    }

    console.log("Outside block->this data" + this.globalstring);
    //console.log("Inside block->let data"+blockString);  gives error
  }
  getCharCountMap(input: Array<string>) {    
    let map = new Map();
    if (!!input) {
      for (let i = 0; i < input.length; i++) {
        let subarray = input[i];
        for (let j = 0; j < subarray.split('').length; j++) {
          if (map.has(subarray[j]) == false) {
            map.set(subarray[j], 1);
          }
          else {
            map.set(subarray[i], map.get(subarray[i]) + 1);
          }
        }
      }
    }
    return map;
  }
  getKeys(input:Object){    
    let clone = input;
    let arrayKeys = Object.keys(input);
    for(let i=0;i<Object.values(clone).length;i++){
      if(typeof Object.values(clone)[i] == "object"){
        this.output.push(arrayKeys[i]);
        this.getKeys(Object.values(clone)[i])
      }
      else{
        this.output.push(arrayKeys[i]);
      }
    }
    return this.output;
  }
  reverseString(mainString:string){
    console.log("Input string : "+mainString);
    return mainString.split('').reverse().join('');
  }
  reverseInput(mainString: Array<any>){
    let reversedString =[];
    for(let i=(mainString.length-1);i>=0;i--){
      reversedString.push(mainString[i])
    }
    return reversedString;
  }
  removeDuplicates(input:Array<string>){
    console.log("Input array of strings : "+ input);
    let uniqueArray =[];
    for(let i=0;i<input.length;i++){
      if(uniqueArray.indexOf(input[i])==-1){
        uniqueArray.push(input[i]);
      }
    }
    return uniqueArray;
  }
}
