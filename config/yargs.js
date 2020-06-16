let description = {
  alias: "d",
  demand: true,
  desc: "Task description",
};

let isCompleted = {
  default: true,
  alias: "c",
  desc: "Mark the task as completed",
};

const argv = require("yargs")
  .command("create", "Create an element for do", { description, isCompleted })
  .command("update", "Update an elemento to do -> to done", {
    description,
    isCompleted,
  })
  .command("remove", "Delete an element for do", { description })
  .command("list")
  .help().argv;

module.exports = {
  argv,
};
