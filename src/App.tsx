import { useState, useEffect } from "react";

type Photo = {
  id: string;
  avatar_url: string;
  login: string;
};

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("bg-orange-500");

  useEffect(() => {
    async function fetchPhotos() {
      setLoading(true);

      const res = await fetch("https://api.github.com/users");

      const photos = await res.json();

      setPhotos(photos);
      setLoading(false);
    }
    fetchPhotos();
  }, []);
  function allowDrop(e: any) {
    e.preventDefault();
  }
  function handleDrag(e: any) {
    e.dataTransfer.setData("text", e.target.id);
  }
  function handleDrop(e: any) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    let element = document.getElementById(data);
    if (element) {
      e.target.appendChild(element);
    } else {
      console.error("Element not found or not a valid node:", data);
    }
  }
  if (loading) {
    return (
      <div className={`flex items-center justify-center h-screen`}>
        <div className="border-[16px] border-[ #f3f3f3] rounded-full w-[120px] h-[120px] border-t-[#3498db] animate-spin"></div>
      </div>
    );
  } else {
    return (
      <div className={`font-mono min-h-screen ${color}`}>
        <div className="justify-center flex pt-10 ">
          <h1 className="text-3xl font-bold">Photo Gallery</h1>
        </div>

        <section>
          <form>
            <div className="flex flex-col items-center mt-8">
              <h3 className="text-3xl mb-8">Select Theme</h3>
              <div className="flex w-[250px] justify-between">
                <div>
                  <input
                    type="radio"
                    name="theme"
                    id="orange"
                    className="peer hidden"
                    value="bg-orange-500"
                    onChange={() => setColor("bg-orange-500")}
                  />
                  <label
                    htmlFor="orange"
                    className=" flex cursor-pointer w-[70px] h-[70px] border-[5px] peer-checked:border-blue-500 rounded-full justify-center items-center"
                  >
                    <div className="z-50 w-[50px] h-[50px] hover:w-[60px] hover:h-[60px] rounded-full bg-orange-500"></div>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="theme"
                    id="blue"
                    className="peer hidden"
                    onChange={() => setColor("bg-green-800")}
                  />
                  <label
                    htmlFor="blue"
                    className=" flex cursor-pointer w-[70px] h-[70px] border-[5px] peer-checked:border-blue-500 rounded-full justify-center items-center"
                  >
                    <div className="z-50 w-[50px] h-[50px] hover:w-[60px] hover:h-[60px] rounded-full bg-green-800"></div>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="theme"
                    id="green"
                    className="peer hidden"
                    onChange={() => setColor("bg-violet-800")}
                  />
                  <label
                    htmlFor="green"
                    className=" flex cursor-pointer w-[70px] h-[70px] border-[5px] peer-checked:border-blue-500 rounded-full justify-center items-center"
                  >
                    <div className="z-50 w-[50px] h-[50px] hover:w-[60px] hover:h-[60px] rounded-full bg-violet-800"></div>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </section>

        <div className="flex items-center flex-col mt-10 ">
          <h1>Drag and Drop cards here</h1>
          <div className="border-2 rounded-full w-16 h-16 flex justify-center items-center mt-10 animate-bounce">
            <div className="text-2xl ">&#8595;</div>
          </div>
        </div>

        <div className="justify-between flex mt-20 container mx-auto">
          <div
            id="div1"
            className="w-72 h-44 bg-orange-200 flex justify-center items-center"
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => allowDrop(e)}
            onDragStart={(e) => handleDrag(e)}
          ></div>
          <div
            id="div2"
            className="w-72 h-44 bg-orange-200 justify-center items-center flex"
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => allowDrop(e)}
            onDragStart={(e) => handleDrag(e)}
          ></div>
          <div
            id="div3"
            className="w-72 h-44 bg-orange-200 justify-center items-center flex"
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => allowDrop(e)}
            onDragStart={(e) => handleDrag(e)}
          ></div>
        </div>

        <div
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => allowDrop(e)}
          onDragStart={(e) => handleDrag(e)}
          className=" justify-center flex mt-40 pb-32"
        >
          <div
            id="gridArea"
            className=" md:grid md:grid-cols-3 md:gap-4"
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => allowDrop(e)}
            onDragStart={(e) => handleDrag(e)}
          >
            {photos.slice(0, 18).map((photo: Photo) => (
              <div
                draggable="true"
                id={photo.id}
                onDragStart={(e) => handleDrag(e)}
                className="shadow-xl  xl:w-80 flex hover:bg-blue-400 md:my-0 my-8 bg-white cursor-move"
                key={photo.id}
              >
                <div className="w-1/2">
                  <img
                    src={photo.avatar_url}
                    alt=""
                    className="w-32"
                    loading="lazy"
                  />
                </div>
                <div className="text-center my-auto w-1/2  ">
                  <h1>{photo.login}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
