var createdFuncion = function () {
  var array = [];
  for (let i = 0; i < 3; i++) {
    array.push(() => console.log(i));
  }
  return array;
};

let arr = createdFuncion();
arr[1]();
arr[2]();

const djimeloveGv = {
  cours: "javascript",
  Email: "riswickelvariste@gmail.com",
  etudiant: [],

  login(nom, prenom) {
    console.log(
      `${nom}, ${prenom} you are in ${this.cours} your email  is ${this.Email}`
    );
    this.etudiant.push(`${nom},${prenom}`);
  },
};

djimeloveGv.login("djimelove ,Elvariste");

console.log(djimeloveGv.etudiant);

const utiliser = djimeloveGv.login;

const Elvariste = {
  cours: "javascript",
  Email: "elvaristeriswick@gmail.com",
  etudiant: [],
};

utiliser.call(djimeloveGv, "djimelove", "Elvariste");

console.log(Elvariste.etudiant);
