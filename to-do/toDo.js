const fs = require("fs");

let toDoList = [];

const saveDB = () => {
  //convierto a json
  let data = JSON.stringify(toDoList);
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw new Error("Could not write");
  });
};

const loadDB = () => {
  try {
    toDoList = require("../db/data.json");
  } catch (error) {
    toDoList = [];
  }
};

const create = (description) => {
  let toDo = {
    description,
    isCompleted: false,
  };
  loadDB();
  toDoList.push(toDo);
  saveDB();
  return toDo; //return de object to show what has been created
};

const getToDoList = () => {
  loadDB();
  return toDoList;
};

const update = (description, isCompleted = true) => {
  loadDB();
  let index = toDoList.findIndex((task) => task.description === description);
  if (index >= 0) {
    toDoList[index].isCompleted = isCompleted === "true" ? true : false;
    saveDB();
    return true;
  } else {
    return false;
  }
};

const remove = (descrition) => {
  loadDB();
  let index = toDoList.findIndex((task) => task.description === descrition);
  if (index >= 0) {
    toDoList.splice(index);
    saveDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  create,
  getToDoList,
  update,
  remove,
};
