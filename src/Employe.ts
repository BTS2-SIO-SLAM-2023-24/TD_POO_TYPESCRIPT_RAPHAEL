import { Animal } from "./Animal";

export class Employe {
    private id: number;
    private nom: string;
    private animal: Animal | null;

    constructor(id: number, nom: string, animal: Animal | null) {
        this.id = id;
        this.nom = nom;
        this.animal = animal !== null ? animal : null; // Affecte null si 'animal' est null, sinon l'objet 'animal'
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getNom(): string {
        return this.nom;
    }

    setNom(nom: string): void {
        this.nom = nom;
    }

    getAnimal() {
        return this.animal;
    }

    setAnimal(animal: Animal | null): void {
        this.animal = animal;
    }

    travaillerAvec() {
        if (this.animal !== null) {
            console.log(this.nom, "travaille avec" , this.animal.getNom());
        } else {
            console.log("Aucun animal associé à cet employé.");
        }
    }

    // Méthode pour assigner un animal à l'employé
    assignerAnimal(animal: Animal | null): void {
        this.animal = animal !== null ? animal : null;
    }

    // Méthode pour retirer l'animal de l'employé
    retirerAnimal(): void {
        this.animal = null;
    }
}