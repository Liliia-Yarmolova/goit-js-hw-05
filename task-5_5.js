/*Задача 5-5
класс
Напиши класс Car с указанными свойствами и методами.*/

class Car {

     static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
  }
    
  /*
   Добавь `статический` метод `getSpecs(car)`, который принимает объект-машину как параметр и возвращает шаблонную строку 
   со свойствами и значениями объекта. Свойства: maxSpeed, speed, isOn, distance, price
    Пример строки, полученной этим методом:
   'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000' */

  /*
   * Конструктор получает объект настроек.
    Добавь свойства будущеего экземпляра класса:
   speed - текущая скорость, начальное значение `0`
   price - цена автомобиля
   maxSpeed - максимальная скорость
   isOn - заведен ли автомобиль. Значения `true` или `false`, начальное значение false
   distance - пробег в километрах, начальное значение `0`
   */
    constructor({ speed, price, maxSpeed, isOn, distance } ) {
        this.speed = 0;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
  }

    
  /*
   * Добавь геттер и сеттер 
   * для свойства `price`, который будет 
   * работать с свойством цены автомобиля.
   * 
   * ВАЖНО: для записи методов get и set
   * значение параметра записывают с 
   * подчеркиванием. См. ниже пример 1.
   */
    
    set price(value) {
        this._price = value
    }

    get price() {
        return this._price
    }
  /*
   * Метод, который заводит автомобиль
   * Записывает в свойство `isOn` значение `true`
   */
    turnOn() {
      this.isOn = true
  }

  /*
   * Метод, чтобы заглушить автомобиль
   * Этот метод должен записывать 
   * в свойство isOn значение false,
   * и сбрасывать текущую скорость до 0
   */
    turnOff() {
        this.isOn = false
        this.speed = 0
  }

  /*
   * Этот метод должен добавлять 
   * к свойству `speed` полученное
   * значение, при условии, 
   * что результирующая скорость
   * не больше чем значение свойства `maxSpeed`
   */
    accelerate(value) {
        if ((this.speed + value) > this.maxSpeed) {
          this.speed = this.maxSpeed
        } else {
           this.speed = this.speed+value
      }
  }

  /*
   * Этот метод должен отнимать 
   * от свойства `speed` 
   * полученное значение, при условии, 
   * что результирующая скорость не меньше 0
   */

    decelerate(value) {
        if ((this.speed - value) < 0) {
          this.speed = 0
        } else {
            this.speed = this.speed -value
      }
  }

  /*
   * Этот метод должен добавлять к свойству 
   * `distance` пробег в километрах, 
   * т.е. hours * speed,
   * но только в том случае, 
   * если машина заведена!
   */
    drive(hours) {
        if (this.isOn) {
          this.distance += this.speed * hours
      }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(mustang);
console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

mustang.accelerate(250);
console.log(mustang);
