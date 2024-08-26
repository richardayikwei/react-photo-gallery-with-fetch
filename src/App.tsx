import { useState, useEffect } from "react";

type Photo = {
  id: string;
  avatar_url: string;
  login: string;
};

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  

  // useEffect(() => {
  //   async function fetchPhotos() {
  //     setLoading(true);

  //     const res = await fetch("https://api.github.com/users");

  //    const photos = await res.json();

  //     setPhotos(photos);
  //     setLoading(false);
  //   }
  //   fetchPhotos();
  // }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <div className="border-[16px] border-[ #f3f3f3] rounded-full w-[120px] h-[120px] border-t-[#3498db] animate-spin"></div>
      </div>
    );
  } else {
    return (
      <div className="font-mono h-screen w-screen">
        <div className="justify-center flex pt-10">
          <h1 className="text-3xl font-bold">Photo Gallery with Fetch</h1>
        </div>

        <div>
          <form>
            <div className="flex justify-center mt-8">
              <div className="flex w-[250px] justify-between">
                <div>
                  <input
                    type="radio"
                    name="theme"
                    id="orange"
                    className="peer hidden"
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
        </div>

        <div className=" justify-center flex mt-40">
          <div className=" grid grid-cols-3 gap-4">
            {photos.slice(0, 18).map((photo: Photo) => (
              <div
                className="shadow-xl  w-80 flex hover:bg-blue-400"
                key={photo.id}
              >
                <div className="w-1/2">
                  <img src={photo.avatar_url} alt="" className="w-32" />
                </div>
                <div className="text-center my-auto w-1/2 ">
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
