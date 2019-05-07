# CompactQueryBuilder
Query builder for JS

let query = QueryBuilder.From('tableName');
    query.Desc('columnName');
    query.Where('columnName', '0', '>=');
    let querystr = query.ToString();