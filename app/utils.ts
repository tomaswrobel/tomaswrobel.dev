export function array<const T extends unknown[]>(...items: T) {
	return Object.freeze(items);
}

export const formatter = new Intl.DateTimeFormat("en", {
	day: "numeric",
	month: "long",
	year: "numeric",
});
