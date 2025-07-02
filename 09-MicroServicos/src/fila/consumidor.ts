import { conectar, FILA } from '../messageBroker';

async function main() {
    const channel = await conectar();
    await channel.assertQueue(FILA);

    console.log('Consumidor conectado, escutando fila ' + FILA);

    await channel.consume(FILA, message => {
        console.log('Mensagem recebida: ' + message.content.toString());
        channel.ack(message);
    });
}

main();