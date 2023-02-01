export class User {
  id: number;
  name: string;
  surname: string;
  BMI: number;

  constructor(id: number, name: string, surname: string, BMI: number) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.BMI = BMI;
  }
}
