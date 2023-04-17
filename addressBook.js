
console.log("Welcome to Address Book");

class Contacts {
    constructor(...details) {
        this.firstName = details[0];
        this.lastName = details[1];
        this.city = details[2];
        this.state = details[3];
        this.zip = details[4];
        this.phoneNo = details[5];
        this.email = details[6];
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    get phoneNo() {
        return this._phoneNo;
    }

    get email() {
        return this._email;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    set city(city) {
        this._city = city;
    }
    
    set state(state){
        this._state = state;
    }

    set zip(zip){
        this._zip = zip;
    }

    set phoneNo(phoneNo){
        this._phoneNo = phoneNo;
    }

    set email(email){
        this._email = email;
    }

    toString() {
        return "First Name : " + this.firstName + "\nLast Name : " + this.lastName + "\nCity : " + this.city + "\nState : " + this.state + "\nZip : "+ this.zip + "\nPhone Number : " + this.phoneNo + "\nEmail ID: " + this.email + "\n";
    }
}

var contact1 = new Contacts("vishal", "chandra", "kanpur", "up", 202020, 9856412346, "ncb@gmail.com");
var contact2 = new Contacts("ram", "kumar", "lucknow", "up", 202320, 9865231478, "abc@gmail.com");

console.log(contact1.toString());
console.log(contact2.toString());

