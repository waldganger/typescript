interface User {
  name: string,
  age: number
}

const user: User = {
  name: "Antony",
  age: 38
}

class Utilisateur {
  nom: string;
  age: number;

  constructor(nom: string, age: number){
    this.nom = nom;
    this.age = age;
  }
}

const Antony = new Utilisateur("Antony", 38);

const tableau: number[] = [1, 2, 3, 4, 5, 10];

console.log(tableau.reduce((sum: number, current: number) => sum + current, 0));


enum Directions {
  Haut,
  Bas,
  Gauche,
  Droit
}

const enBas = Directions.Bas;


