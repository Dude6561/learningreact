export default function List() {
  const fruits = ["apple", "Mango", "guava"];
  const listitems = fruits.map((fruits) => <li>{fruits}</li>);
  return <ul>{listitems}</ul>;
}
