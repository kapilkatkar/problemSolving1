/**
 * @description Greetings
 * Step 1   - Check if the input is valid or not
 * Step 2   - If input is not valid, throw an  error
 * Step 3   - Try to convert the string into capitalise
 * Step 4   - Concat the string with the message
 * Step 5   - Return the string
 *
 */

function GreetingFun(name) {
  if (name === null || name === "" || typeof name !== "string") {
    return `please enter valid input`;
  }

  let formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  console.log(formattedName);
  return `Hellow ${formattedName}, welcome to the team.`;
}
console.log(GreetingFun("kApIl"));
