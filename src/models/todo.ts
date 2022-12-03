//definicia modelu Todo
//da sa pouzit type, interface, alebo class
//class potom moze byt v inej funkcii aj type (resp. type-parameter)
class Todo {
  //cisto javascipt len cosntructor bez tychto dvoch riadkov
  //typescript vyzaduje najprv definiciu, potom nastavenie v constuctore!
  id: string;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.id = Math.random().toString().substring(2);
  }
}

export default Todo;
