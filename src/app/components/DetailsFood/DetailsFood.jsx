import Image from "next/image";
import styles from "./DetailsFood.module.css";

import salad from "../../../../public/salad.svg";
import medScale from "../../../../public/medScale.svg";
import lowScale from "../../../../public/lowScale.svg";

export default function DetailsFood() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.imageFood}>
          <Image
            className={styles.imageFood}
            src={salad}
            alt="image of salad"
            width={200}
            height={200}
          />
        </section>
        <section className={styles.summaryFood}>
          <h3>Salada variada</h3>
          <div className={styles.infoGeneral}>
            <div className={styles.summaryValues}>
              <h5>Energia</h5>
              <span>221,15 kcal</span>
            </div>
            <div className={styles.summaryValues}>
              <h5>Porção total</h5>
              <span>240 g</span>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.specificValuesNutritionWithRange}>
            <div className={styles.specificValuesNutrition}>
              <span>Proteínas</span>
              <span>15,13 g</span>
            </div>
            <Image
              src={medScale}
              alt="medium scale image"
              layout="responsive"
            />
          </div>
          <div className={styles.specificValuesNutritionWithRange}>
            <div className={styles.specificValuesNutrition}>
              <span>Carboidratos</span>
              <span>18,40 g</span>
            </div>
            <Image
              src={medScale}
              alt="medium scale image"
              layout="responsive"
            />
          </div>
          <div className={styles.specificValuesNutritionWithRange}>
            <div className={styles.specificValuesNutrition}>
              <span>Açúcar</span>
              <span>4,88 g</span>
            </div>
            <Image
              src={lowScale}
              alt="medium scale image"
              layout="responsive"
            />
          </div>
          <div>
            <div className={styles.specificValuesNutrition}>
              <span>Gorduras</span>
              <span>5,18 g</span>
            </div>
            <Image
              src={lowScale}
              alt="medium scale image"
              layout="responsive"
            />
          </div>
        </section>
        <button className={styles.buttonDetails}>Mais detalhes</button>
      </div>
    </main>
  );
}
