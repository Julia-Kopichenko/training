//! Реализуем Singleton через замыкание

function Universe() {

  // если при инициализации нового экземпляра у нас уже существует флаг exists(т.е. мы его ранее проинициализировали)
  // то мы останавливаем процесс создания нового instance и возвращаем старый instance
  
  if (Universe.exists) {
    return Universe.instance
  }

  Universe.instance = this; // заносим в поле instance контекст функции конструктора
  Universe.exists = true; // если true, то уже был проинициализирован
  
  this.size = 100;
  
  this.getSize = function() {
    return this.size;
  }
  
  this.setSize = function(value) {
    this.size = value;
  }
}

let a = new Universe();
let b = new Universe();

console.log(a.getSize(), b.getSize());

a.setSize(200);

console.log(a.getSize(), b.getSize());

console.log(`a === b ? ${a === b}`)
