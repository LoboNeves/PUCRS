// Exemplo de uso instanciando as classes feitas anteriormente
import { Cachorro } from "./Cachorro.mjs";
import { Gato } from "./Gato.mjs";

const cachorro = new Cachorro("Sansão", "Branco", 3);
const gato = new Gato("Luna", "Branco", 3);

cachorro.comer();
cachorro.falar();

gato.comer();
gato.falar();