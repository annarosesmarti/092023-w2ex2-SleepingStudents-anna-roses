const student = {
  id: 1,
  name: "Maripili",
  surname: "Rigoberta Estuarda",
  sleepingHours: 3,
  grade: 3,
  introduceMessage: function () {
    console.log(this.name);
  },
};

const studentA = {
  id: 1,
  name: "Pepe",
  surname: "Rigoberta Estuarda",
  sleepingHours: 3,
  grade: 3,
};

student.introduceSurname = function () {
  console.log(this.surname);
};

student.introduceMessage = function () {
  console.log(`${this.name}`);
};

studentA.introduceMessage();
