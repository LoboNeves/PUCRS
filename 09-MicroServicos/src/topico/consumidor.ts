import { conectar, TOPICO } from '../messageBroker';

async function main() {
    const channel = await conectar();
    await channel.assertExchange(TOPICO, 'topic', { durable: true });
    const queue = await channel.assertQueue('', { exclusive: true });
    await channel.bindQueue(queue.queue, TOPICO, '');

    console.log('Consumidor conectado, escutando topico ' + TOPICO);

    await channel.consume(queue.queue, message => {
        console.log('Mensagem recebida: ' + message.content.toString());
    }, { noAck: true });
}

main();