const db = require("../db/db.json");
const fs = require("fs-extra");
const path = require("path");
const filePath = path.join(__dirname, "../db/db.json");





exports.createProduct = (req, res, next) => {
  console.log("request", req.body);
  const name = req.body.name
  const umur = req.body.umur
  res.json({
    message: "create product sukses",
    data: {
      id: 1,
      name: name,
      umur : umur,
    },
  });
  next();
};
exports.getAllProducts = (req, res, next) => {
  res.json(db);

  next();
};
exports.getByTable = (req, res, next) => {
  console.log("quer", req.query);
  const endpoint = req.params.table;
  const data = db[endpoint];
  console.log("data", data);

  const keys = Object.keys(req.query);
  const key = keys[0];

  if (data) {
    if (keys.length) {
      console.log("req query jalan", req.query);
      const foundData = data.find((item) => item[key] === req.query[key]);

      foundData
        ? res.json(foundData)
        : res.send("tidak ada yang namanya " + req.query[key]);
    } else {
      res.json(data);
    }
  } else {
    res.send(`endpoint ${endpoint} not found`);
  }

  next();
};
exports.getById = (req, res, next) => {
  const table = req.params.table;
  const id = req.params.id;
  const data = db[table];
  if (data) {
    console.log("data", data);
    console.log("id", id);
    const response = data.find((item) => item.id.toString() === id.toString());
    console.log("res", response);
    res.json(response);
  } else {
    res.send(`endpoint ${endpoint} not found`);
  }

  next();
};



exports.create =async (req, res, next) => {

  try {
    const tableName = req.params.table

   const data = db[tableName]
    if(data){
     const lastItemId = data[data.length -1].id
     const payload = {id : lastItemId +1, ...req.body } 
     data.push(payload)
   
    }else{
     db[tableName] = [{id: 1, ...req.body}]
    }
   await fs.writeJson(filePath, db);
  
    res.json(db[tableName])
    
  } catch (error) {
    res.send(error)
  }


  // console.log("payload", req.body);

  
next();


}

exports.hapus = async (req, res, next) => {

try {
  const tableName = req.params.table
  const id = req.params.id

  const idxToDelete = db[tableName].findIndex((item)=> parseInt( item.id) == parseInt( id))
console.log("idx", idxToDelete);
if(idxToDelete > -1){

  db[tableName].splice(idxToDelete, 1) 
  await fs.writeJson(filePath, db);
res.json(db[tableName])
}else{
res.send("id "+ id +" tidak ditemukan")
}





  
} catch (error) {
  console.log("err", error);
}
next()
}

