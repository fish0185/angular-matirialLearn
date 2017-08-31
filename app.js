function someClass(){
    console.log('run');
    this.someProperty = 'some initial value';
    console.log('test');

}

someClass.prototype.someMemberFunction = function () {
    this.someProperty = 'modified value';
}

var instance = new someClass();

console.log(instance.someProperty);
instance.someMemberFunction();
console.log(instance.someProperty);

