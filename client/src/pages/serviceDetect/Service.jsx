import * as tf from "@tensorflow/tfjs";
import { useEffect, useState } from "react";

function Service() {
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function loadModel() {
      const loadedModel = await tf.loadLayersModel(
        "https://teachablemachine.withgoogle.com/models/jD65zu4Yr/"
      );
      setModel(loadedModel);
    }

    loadModel();
  }, []);

  async function predict() {
    const image = document.getElementById("image");
    const tensor = tf.browser.fromPixels(image);
    const predictions = await model.predict(tensor).data();
    console.log(predictions);
  }

  return (
    <div>
      <img id="image" src="path/to/image.jpg" alt="example image" />
      <button onClick={predict}>Predict</button>
    </div>
  );
}

export default Service;
