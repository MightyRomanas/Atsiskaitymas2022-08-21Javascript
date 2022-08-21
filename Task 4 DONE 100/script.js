/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
let sarasas = {};
function sukeltiDuomenys2(robots){
	//console.log(robots);
	const kunas = document.getElementById("output");
	//robots.forEach(robot => {
	for(let i=0;i < robots.length;i++){
		const konteineris = document.createElement('div');
		const loginas = document.createElement('div');
		loginas.innerText = robots[i].brand;
		//console.log(loginas.innerText);
		//const paveiksliukas = document.createElement('img');
		//paveiksliukas.src = robot.avatar_url;
		//const paveiksliukasKonteineris = document.createElement('div');
		//paveiksliukasKonteineris.append(paveiksliukas);
		loginas.className = "brandContainer";
		//paveiksliukasKonteineris.className = "imageContainer";
		konteineris.className = "bendrasContainer";
		const modelis = document.createElement('div');
		modelis.innerText = robots[i].models;
		modelis.className = "modelisContainer";
		konteineris.append(loginas);
		konteineris.append(modelis);
		//konteineris.append(paveiksliukasKonteineris);
		kunas.append(konteineris);
	}	
}
fetch(ENDPOINT)
    .then(result => result.json())
    .then((output) => {
        //console.log('Output: ', output);
		sarasas = output;
		sukeltiDuomenys2(sarasas);
        
}).catch(err => console.error(err));
//.log(sarasas);

