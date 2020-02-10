var Bee = function() {
    Grub.call(this);
    this.age = 5 ;
    this.color = "yellow";
    this.food = "jelly";
    this.job ="keep on growing";
};

//Almond.prototype = Object.create(Nut.prototype)
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;