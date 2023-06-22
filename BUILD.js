const formsData = [
    //first layer contains tables
    {
        name: "users_tbl",
        title: "Users Form",
        fields: {
            //second layer contains fields
            username: "varchar 50",
            password: "varchar 50",
            address: "varchar 100"
        }
    }
]

const valueData = {
    username: "varchar 50",
    password: "varchar 50",
    address: "varchar 100"
}

const convertToFieldsAndValues = (valueObj) => {
    return {
        fields: Object.keys(valueObj),
        values: Object.values(valueObj)
    }
}

const CreateTableQB = (tableObject) => {
        let Query = `CREATE TABLE ${tableObject.name} (
        ${tableObject.name}_id int NOT NULL AUTO_INCREMENT,
        ${Object.keys(tableObject.fields).map((field) => {
            const dataTypeToken = tableObject.fields[field].split(' ')
            return `${field} ${dataTypeToken[0]}(${dataTypeToken[1]})`
        })}
        PRIMARY KEY (${tableObject.name}_id)
    )`

    return Query
}

const BindInsert = (tableName, insertValues) => {
    let { fields, values } = convertToFieldsAndValues(insertValues)
    let Query = `INSERT INTO ${tableName} (${fields}) VALUES (${JSON.stringify(values).replaceAll("[", "").replaceAll("]", "")})`
    
    return Query
}

const BindUpdate = (tableName, updateValues, tableID) => {
    let { fields, values } = convertToFieldsAndValues(updateValues)
    let Query = `UPDATE ${tableName} SET ${
        fields.map((field, index) => {
            return `${field} = "${values[index]}"`
        })
    }
    WHERE ${tableName}_id = ${tableID}`

    return Query
}

const BindDelete = (tableName, tableID) => {
    let Query = `DELETE FROM ${tableName} WHERE ${tableName}_id = ${tableID}`
    return Query
}

const BindSelect = (tableName, id = null) => {
    let QueryOne = `SELECT * FROM ${tableName} WHERE ${tableName}_id = ${id}`
    let QueryAll = `SELECT * FROM ${tableName}`

    return id === null ? QueryAll : QueryOne
}

const BindSelectCustom = (tableName, customConditions) => {
    let condition = ''
    Object.keys(customConditions).map((field, index) => {
        condition += `${index > 0 ? ' AND ' : ''}${field} = "${customConditions[field]}"`
    })
    let Query = `SELECT * FROM ${tableName} WHERE ${condition}`

    return Query
}

console.log(CreateTableQB(formsData[0]))
console.log(BindInsert('users_tbl', valueData ))
console.log(BindUpdate('users_tbl', valueData, 22))
console.log(BindDelete('users_tbl', 22))
console.log(BindSelect('users_tbl'))
console.log(BindSelect('users_tbl', 20))
console.log(BindSelectCustom('users_tbl', {
    username: "gelo",
    password: "12345"
}))