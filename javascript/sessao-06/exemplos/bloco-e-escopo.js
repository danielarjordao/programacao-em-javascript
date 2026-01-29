let souGlobal = "global";

if (souGlobal) {
	let souLocal = "local";
	souGlobal = "modificado no escopo local";
	console.log(`souGlobal dentro do if: ${souGlobal}`);
	console.log(`souLocal dentro do if: ${souLocal}`);
}

console.log(`souGlobal fora do if: ${souGlobal}`);
// console.log(`souLocal fora do if: ${souLocal}`); // Isso causará um erro, pois souLocal não está definido aqui.
