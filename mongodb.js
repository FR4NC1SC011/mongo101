
// 2) El conjunto de datos contiene 4 calificaciones de n estudiantes.
// Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo:
// >use students; >db.grades.count() ¿Cuántos registros arrojo el comando count?
// ----- RESPUESTA ------
//> db.grades.count()
// RES: 800
// ----- RESPUESTA ------

// 3) Encuentra todas las calificaciones del estudiante con el id numero 4.

// ----- RESPUESTA ------
// db.grades.find({"student_id":4}, {"score":1, "_id":0}).pretty();
// { "score" : 87.89071881934647 }
// { "score" : 5.244452510818443 }
// { "score" : 28.656451042441 }
// { "score" : 27.29006335059361 }
// ----- RESPUESTA ------


// 4) ¿Cuántos registros hay de tipo exam?
//
// ----- RESPUESTA ------
// db.grades.count({"type":"exam"});
// RES: 200
// ----- RESPUESTA ------


// 5) ¿Cuántos registros hay de tipo homework?

// ----- RESPUESTA ------
// db.grades.count({"type":"homework"});
// RES: 400
// ----- RESPUESTA ------


// 6) ¿Cuántos registros hay de tipo quiz?
//
// ----- RESPUESTA ------
// > db.grades.count({"type":"quiz"});
// RES: 200
// ----- RESPUESTA ------


// 7) Elimina todas las calificaciones del estudiante con el id numero 3
//
// ----- RESPUESTA ------
// db.grades.remove({"student_id":3})
// ----- RESPUESTA ------


// 8) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
//
// ----- RESPUESTA ------
// > db.grades.find({"score": 75.29561445722392}, {"student_id":1, "score":1, "_id":0}).pretty();
// { "student_id" : 9, "score" : 75.29561445722392 }/
// RES: Estudiante con el id #9
// ----- RESPUESTA ------


// 9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
//
// ----- RESPUESTA ------
// > db.grades.update({'_id': ObjectId("50906d7fa3c412bb040eb591")}, {$set:{"score":100}} );
// ----- RESPUESTA ------


// 10) A qué estudiante pertenece esta calificación.
//
// ----- RESPUESTA ------
// > db.grades.find({"score": 100}, {"student_id":1, "score":1, "_id":0}).pretty();
// { "student_id" : 6, "score" : 100 }
// RES: Estudiante con el id #6
// ----- RESPUESTA ------
