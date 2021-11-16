class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("Hello, I'm " + this.name);
  }
}

const taro = new Human("Taro", 30);
const hanako = new Human("Hanako", 20);

taro.hello();
hanako.hello();
