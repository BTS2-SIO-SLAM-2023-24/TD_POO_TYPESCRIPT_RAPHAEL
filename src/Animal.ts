export class Animal {
    private AnimalHeureux:boolean = false
    private id: number;
    private nom : string;
    private age : number;
    private dated : Date;
    private datef : Date;

    constructor(id:number, nom:string, age:number, dated: Date, datef: Date){
        this.id = id;
        this.age = age;
        this.nom = nom;
        this.dated = dated;
        this.datef = datef;
    }
    
    setAnimalHeureux(animalheureux:boolean){
        this.AnimalHeureux=animalheureux
    }

    estAnimalHeureux(){
        return this.AnimalHeureux
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

    getDateD(){
        return this.dated 
    }

    setDateD(dated:Date){
        this.dated = dated
    }

    getDateF(){
        return this.datef 
    }

    setDateF(datef:Date){
        this.datef = datef
    }

    afficherInfos(){
        console.log("ID :", this.id, "Nom :", this.nom, "Age :", this.age, "Début Prêt :", this.dated, "Fin Prêt :", this.datef)
    }

    interaction(){
        console.log("L'animal interagit de manière générique.");
    }
}



