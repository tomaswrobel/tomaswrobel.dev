import clsx from "clsx";
import type {FunctionComponent, TableHTMLAttributes} from "react";

const Table: FunctionComponent<Table.Props> = ({children, className, stripped, ...props}) => (
	<>
		<table className={clsx(className, "table", {"table-striped": stripped})} {...props}>
			{children}
		</table>
		<table className={clsx(className, "table-dark", {"table-striped": stripped})} {...props}>
			{children}
		</table>
	</>
);

declare namespace Table {
	export interface Props extends TableHTMLAttributes<HTMLTableElement> {
		stripped?: boolean;
	}
}

export default Table;