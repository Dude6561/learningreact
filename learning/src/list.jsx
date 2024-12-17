export default function List() {
  const fruits = [
    { name: "apple" },
    { name: "mango" },
    { name: "guava" },
    { name: "orange" },
  ];
  const listitems = fruits.map((fruits) => <li>{fruits.name}</li>);
  return <ul>{listitems}</ul>;
}
