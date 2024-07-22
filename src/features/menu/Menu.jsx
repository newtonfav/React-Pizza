/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  const arr = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

  function display(x) {
    for (let i = 0; i < arr.length; i++) {
      return arr[i](x);
    }
  }

  console.log(display(2));

  return (
    <h1>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </h1>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
