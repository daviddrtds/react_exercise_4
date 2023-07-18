import styles from "./AvailableProducts.module.css";
import Card from "../ui/Card";
import ProductItem from "./productItem/ProductItem";

const productList = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function AvailableProducts() {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {productList.map((i) => {
            return <ProductItem key={i.id} id={i.id} list={i} />;
          })}
        </ul>
      </Card>
    </section>
  );
}
