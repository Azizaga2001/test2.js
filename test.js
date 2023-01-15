//1)
//создайте класс user с конструктором
class user {
    constructor() {
        
    }
}
//2)
//инициализируйте параметры из конструкторе
class User {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
    talk() {
        console.log('I can talk');
    }
}

const user3 = new User()

console.log("1)", user3.talk())

//3)
//создайте 2 обьекта user1, user2 используя ранее созданный класс User
const user1 = new User('Azizaga', '1')
const user2 = new User('Ismail', '2')
//4)
//добавьте в класс user из второго теста метод talk
//метод talk должен выводить в консоли 'I can talk' сообщение при вызове
//создайте обьект user3 используя класс User
//запустите метод talk ранее добавленный в класс User для обьекта user3
