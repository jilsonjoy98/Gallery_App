import React, { useState, useEffect } from "react";
import "./Gallery.css";
function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      const data = [
        {
          id: 1,
          url: "https://play-lh.googleusercontent.com/LyOLqzFJtKHmTPiciOepfy2yatlJ7fJYITmNMO63Qd1qYWhwXvk-VioEp0jBHwTqrJA",
          title: "Need for Speed",
        },
        {
          id: 2,
          url: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
          title: "God of war",
        },
        {
          id: 3,
          url: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png",
          title: "last of us",
        },
        {
          id: 4,
          url: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2814/GGyEnCkIXoyiVlN9sRHkzUPo.png",
          title: "Doom",
        },
        {
          id: 5,
          url: "https://assets1.ignimgs.com/2016/10/18/red-dead-redemption-2-buttonjpg-f9ad35.jpg",
          title: "Red dead redemption 2",
        },
        {
          id: 6,
          url: "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/0Jz6uJLxOK7JOMMfcfHFBi1D.png",
          title: "Elden Ring",
        },
        {
          id: 7,
          url: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png",
          title: "Spider Man",
        },
        {
          id: 8,
          url: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png",
          title: "Horizon Forbidden West",
        },
      ];
      setImages(data);
    };

    fetchImages();
  }, [])

  const handleDeleteImage=(id)=>{
    setImages(images.filter((image)=>image.id !== id))
  }

  return (
    <div>
      <h1 className="title">Image Gallery App</h1>

      {
        images.length > 0 ?
        (
                  <div className="Image_grid">
        {images.map((image) => (
          <div className="image_card" key={image.id}>
            <img src={image.url} alt="game image" />
            <div className="image_details">
              <h3>{image.title}</h3>
              <button onClick={() => handleDeleteImage(image.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

        ):
        <p className="no_images">No images found</p>
      }
    </div>
  );
}

export default Gallery;
