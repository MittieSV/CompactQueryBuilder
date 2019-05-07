
import {Query} from "./Query";


export class QueryBuilder {
    public static From(table_name: string): Query {
        return new Query(table_name);
    }
}
