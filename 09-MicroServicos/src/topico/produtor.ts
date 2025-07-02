import * as readline from 'readline/promises';
import { conectar, TOPICO } from '../messageBroker';
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    const channel = await conectar();
    await channel.assertExchange(TOPICO, 'topic', { durable: true });

    while (true) {
        const message = await read.question('Digite uma mensagem: ');
        if (message.toLowerCase() === 'exit') {
            process.exit(0);
        }
        channel.publish(TOPICO, '', Buffer.from(message));
        console.log('Mensagem enviada para o topico ' + TOPICO);
    }
}

main();