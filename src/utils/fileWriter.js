
import fs from "fs";

/**
 * This function is responsible for writing the information in the json file
 * @param {*} city 
 * @param {*} arr 
 */

export default function writeFile(city,arr){
    fs.writeFile(
		`./json/${city}.json`,
		JSON.stringify(arr),
		function (err) {
			if (err) {
				console.log(err);
			}
			console.log(`${city} JSON generated successfully`);
		}
	);


}