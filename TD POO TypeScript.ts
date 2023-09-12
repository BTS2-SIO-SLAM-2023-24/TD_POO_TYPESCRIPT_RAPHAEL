class Animal {
    private id: number;
    private nom : string;
    private age : number;

    constructor(id:number, nom:string, age:number){
        this.id = id;
        this.age = age;
        this.nom = nom;
    }

    getId():number{
        return this.id
    }

    setId(id:number):void{
        this.id = id
    }

    getNom():string{
        return this.nom
    }

    setNom(nom:string):void{
        this.nom = nom
    }

    getAge():number{
        return this.age
    }

    setAge(age:number):void{
        this.age = age
    }
}

class Chien extends Animal{
    private fairedubruit():void{
        console.log('${this.nom} aboie');
    }
    
    annoncerbruit():void{
        this.fairedubruit();
    }
}