console.log("Fechas JS");

weekDays = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
monthYear = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// - La fecha de hoy
const today = new Date()

console.log(today);
console.log(today.getDay());
console.log(weekDays[today.getDay() - 1]);

// - La fecha de tu nacimiento
const dateBirth = new Date("August 4, 1979")
console.log(dateBirth);


// - Un variable que indique si hoy es más tarde( > ) que la fecha de tu nacimiento
moreLate = false;
if (dateBirth < today) moreLate = true;
console.log(moreLate);

// - Una variable que contenga el día de tu nacimiento


dayBirth = dateBirth.getDate();
console.log(dayBirth);
console.log(weekDays[dateBirth.getDay() - 1]);


// - Una variable que contenga el mes de tu nacimiento(recuerda que Enero es mes 0)

birthMonth = dateBirth.getMonth();
console.log(birthMonth + 1);
console.log(monthYear[dateBirth.getDay() + 1]);

// - Una variable que contenga el año de tu nacimiento(con 4 dígitos)

console.log(dateBirth.getFullYear())
