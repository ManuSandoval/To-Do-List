//npm i --save yargs colors
const argv = require("./config/yargs").argv;
require("colors");

const { create, getToDoList, update, remove } = require("./to-do/toDo");

let command = argv._[0];

const showToDoList = () => {
  let toDoList = getToDoList();

  for (let taskNumber = 0; taskNumber < toDoList.length; taskNumber++) {
    console.log("=========== To Do ==============");
    console.log(toDoList[taskNumber].description.yellow);
    console.log(
      `Estate: ${
        toDoList[taskNumber].isCompleted ? "Completed".green : "Incompleted".red
      }`
    );
    console.log("================================");
  }
};

switch (command) {
  case "create":
    let task = create(argv.description);
    console.log(task);
    break;
  case "update":
    let updated = update(argv.description, argv.isCompleted);
    updated
      ? console.log("Update successful")
      : console.log("No task was found with that description");
    break;
  case "remove":
    let removed = remove(argv.description);
    removed
      ? console.log("Remove successful")
      : console.log("No task was found with that description");
    break;
  case "list":
    console.log("List tasks to do");
    showToDoList();
    break;
  default:
    console.log("Unrecognized command");
}
