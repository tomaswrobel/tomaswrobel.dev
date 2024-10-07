import type {Metadata} from "next";
import Paginated from "components/paginated";

export const metadata: Metadata = {
	title: "Tomáš Wróbel | Certificates",
	description: "Certificates from various online courses and workshops."
};

export default async function Certificates() {
	const paginatedData: Paginated.Data[] = [];
	const {data} = await import("./data");

	for (const json of data) {
		const {default: img} = await import(`./images/${json.id}.png`);
		paginatedData.push({...json, img, url: `/certificates/${json.id}`});
	}

	return <Paginated data={paginatedData} heading="My certificates" />;
}
