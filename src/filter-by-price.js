import XLSX from "xlsx";
import fileWriter from "./utils/fileWriter.js";

function filterByPrice({ houses, maximumPrice, city }) {
	const filteredHouses = houses
		.filter(
			(house) =>
				Number(house.priceInCLP.replace("$", "").replace(/\./g, "")) <
				maximumPrice
		)
		.map((filterHouse) => {
			return {
				Location: filterHouse.location,
				URL: filterHouse.url,
			};
		});

	const workSheet = XLSX.utils.json_to_sheet(filteredHouses);
	const workBook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workBook, workSheet, "Houses");
	XLSX.writeFile(workBook, `./xlsx/${city}.xlsx`);
	console.log(`${city} XLSX File generated successfully`);
	fileWriter(city,filteredHouses);
}

 
export default filterByPrice;
