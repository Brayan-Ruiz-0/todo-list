interface ICreateMembersVisitsSummaryRecord {
  membersVisitsSummaryId: string | number;
  membershipId: string;
  membershipLevel: string;
}
const generateId = () => {
  const random = Math.random();
  const fecha = Date.now();
  return random + fecha;
};

const membersVisitsSummaryId = generateId();
const membersVisitsSummaryRow: ICreateMembersVisitsSummaryRecord = {
  membersVisitsSummaryId,
  membershipId: "123",
  membershipLevel: "test",
};

const arrayConObjetos = new Array(10000);
//arrayConObjetos.fill(membersVisitsSummaryRow);

const indiceEspecifico = 42222;
// Utilizar forEach para imprimir el objeto en un índice específico
arrayConObjetos.forEach((objeto, indice) => {
  if (indice === indiceEspecifico) {
    console.log(`Objeto en el índice ${indiceEspecifico}:`, objeto);
  }
});

// Imprimir el array completo
console.log(arrayConObjetos);
const Database = () => {
  return <div>aaaaaaaaaaaaaaaaaaa</div>;
};

export default Database;
