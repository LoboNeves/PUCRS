import * as readline from 'readline/promises';
import { conectar, FILA } from '../messageBroker';
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    const channel = await conectar();
    await channel.assertQueue(FILA);

    while (true) {
        const message = await read.question('Digite uma mensagem: ');
        if (message.toLowerCase() === 'exit') {
            process.exit(0);
        }
        channel.sendToQueue(FILA, Buffer.from(message));
        console.log('Mensagem enviada para a fila ' + FILA);
    }
}

main();