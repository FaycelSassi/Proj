const {createPool} = require('mysql')
const pool= createPool({
    host: "localhost",
    user: "root",
    password: "",
    connectionLimit: 10
})
pool.query('select * from test2.user',(err,res)=>{
    return console.log(res)
})

pool.query('insert into test2.user (id, fstname, lstname, mail, psd) VALUES (NULL,"sdfdhsdf", "jhfhksdhf", "nfksdjfmmkfmksdf@mail.com", "fhdshlfjpsd")',()=>{
    return console.log("done")
})

pool.query('select * from test2.user',(err,res)=>{
    return console.log(res)
})

