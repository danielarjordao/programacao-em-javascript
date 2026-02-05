function primeiro() {
  console.log("Primeiro");
}

function segundo() {
  console.log("Segundo");
  primeiro();
}

function terceiro() {
  console.log("Terceiro");
  segundo();
}

terceiro();

