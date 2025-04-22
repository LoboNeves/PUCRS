const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('PUCRS-Aula5');

    //Inserção de dados
    const insertResult = await db.collection("users").insertMany(
    [
        {
        nome: "Daniel",
        idade: 27,
        sexo: "M",
        cidade: "Rio de Janeiro",
        },
        {
        nome: "Fulano",
        idade: 31,
        sexo: "M",
        cidade: "São Paulo",
        },
    ],
    );
    console.log("Dados inseridos: ", insertResult.insertedCount);

    //Consulta de todos os usuários
    const allUsers = await db.collection("users").find().toArray();
    console.log("Todos os usuários: ", allUsers);

    //Consulta de usuário pelo nome
    const user = await db.collection("users").findOne(
    {
      nome: "Daniel",
    },
    );
    console.log('Usuário encontrado:', user);

    //Consultar usuário com filtro
    const filtro = await db.collection("users").find(
        {cidade: "Rio de Janeiro"},
    ).toArray();
    console.log("Usuários no Rio de Janeiro: ", filtro);

    //Atualização de dados
    const updateResult = await db.collection("users").updateOne(
    {
      nome: "Daniel",
    },
    {
      $set: {
        idade: 28,
        sexo: "M",
        cidade: "Rio de Janeiro",
      },
    },
    );
    console.log("Dados atualizados: ", updateResult.modifiedCount);

    //Contagem de usuários
    const count = await db.collection("users").countDocuments(
    );
    console.log("Contagem de usuários: ", count);

    //Exclusão de dados
    const deletedResult = await db.collection("users").deleteOne(
    {
      nome: "Daniel",
    },
    );
    console.log("Dados excluídos: ", deletedResult.deletedCount);


  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();

