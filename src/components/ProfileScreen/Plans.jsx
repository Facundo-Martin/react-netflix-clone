import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import { db } from "../../firebase";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  collectionGroup,
} from "firebase/firestore";

import "./Plans.css";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const productsRef = collection(db, "products");
    //   const q = query(productsRef, where("active", "==", true));
    //   const querySnapshot = await getDocs(q);

    //   querySnapshot.forEach(async (doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     const priceRef = productsRef.doc(doc.id);

    //     // const price = await priceRef.listCollections();
    //     console.log("TESTING", doc.id);
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // };
    // fetchProducts();

    const fetchPrice = async () => {
      const prices = await getDocs(collectionGroup(db, "products"));
      console.log("testing this shit", prices);
    };

    fetchPrice();

    // db.collection("products")
    //   .where("active", "==", true)
    //   .onSnapshot((querySnapshot) => {
    //     const products = {};
    //     querySnapshot.forEach(async (productDoc) => {
    //       products[productDoc.id] = productDoc.data();
    //       const priceSnap = await productDoc.ref.collection("prices").get();
    //       priceSnap.docs.forEach((price) => {
    //         products[productDoc.id].prices = {
    //           priceId: price.id,
    //           priceData: price.data(),
    //         };
    //       });
    //     });
    //   });
  }, []);

  return (
    <>
      <div className="plan">
        <div>
          <p>Premium Plan</p>
          <div className="plan__description">
            <span>✓ Watch on 4 supported devices at a time</span>
            <span>✓ Unlimited movies, TV shows, and mobile games</span>
            <span>✓ Watch in Ultra HD</span>
            <span>✓ Ad-free TV shows and movies</span>
            <span>✓ Download on 4 supported devices at a time</span>
          </div>
        </div>
        <Button style={{ padding: "8px 12px", fontSize: ".8rem" }}>
          Subscribe
        </Button>
      </div>
      <div className="plan">
        <div>
          <p>Standard Plan</p>
          <div className="plan__description">
            <span>✓ Watch on 2 supported devices at a time</span>
            <span>✓ Unlimited movies, TV shows, and mobile games</span>
            <span>✓ Watch in Full HD</span>
            <span>✓ Ad-free TV shows and movies</span>
            <span>✓ Download on 2 supported devices at a time</span>
          </div>
        </div>
        <Button style={{ padding: "8px 12px", fontSize: ".8rem" }}>
          Subscribe
        </Button>{" "}
      </div>
      <div className="plan">
        <div>
          <p>Basic Plan</p>
          <div className="plan__description">
            <span>✓ Watch on 1 supported device at a time</span>
            <span>✓ Unlimited movies, TV shows, and mobile games</span>
            <span>✓ Watch in HD</span>
            <span>✓ Ad-free TV shows and movies</span>
            <span>✓ Download on 1 supported device at a time</span>
          </div>
        </div>
        <Button
          style={{
            padding: "8px 12px",
            fontSize: ".8rem",
            backgroundColor: "grey",
          }}
        >
          Current plan
        </Button>
      </div>
    </>
  );
};

export default Plans;
