import "./add.css";
import React, { useState } from "react";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = React.useReducer(gigReducer, INITIAL_STATE);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    const featureValue = e.target[0].value.trim();

    if (featureValue) {
      dispatch({
        type: "ADD_FEATURE",
        payload: featureValue,
      });
      e.target[0].value = "";
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);
      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({
        type: "ADD_IMAGES",
        payload: {
          cover,
          images,
        },
      });
    } catch (err) {
      setUploading(false);
      console.log(err);
    }
  };

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs");
  };

  return (
    <div className="add flex justify-center">
      <div className="container w-[1400px] p-[50px] pl-0 pr-0">
        <h1 className="w-max mb-[30px] text-[gray] font-light text-2xl">
          Add New Gig
        </h1>
        <div className="sections flex justify-between gap-24">
          <div className="info flex-1 flex flex-col gap-2.5 justify-between">
            <label htmlFor="text" className="text-[gray] text-[18px]">
              Title
            </label>
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="text"
              id="text"
              placeholder="e.g. I will do something I'm really good at"
              value={state.title}
              onChange={handleChange}
            />
            <label htmlFor="cats" className="text-[gray] text-[18px]">
              Category
            </label>
            <select
              value={state.cat}
              onChange={handleChange}
              name="cats"
              id="cats"
              className="p-5  border-solid  block w-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md 
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            >
              <option className="text-base font-light" value="design">
                Design
              </option>
              <option className="text-base font-light" value="web">
                Web Development
              </option>
              <option className="text-base font-light" value="animation">
                Animation
              </option>
              <option className="text-base font-light" value="music">
                Music
              </option>
            </select>
            <div className="images flex flex-col gap-2.5">
              <div className="imagesInputs flex flex-col gap-2.5 border border-solid border-[lightgrey] rounded-md p-2">
                <label htmlFor="cover" className="text-[gray] text-[18px]">
                  Cover Image
                </label>
                <input
                  className="p-5 "
                  type="file"
                  id="cover"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="img" className="text-[gray] text-[18px]">
                  Upload Images
                </label>
                <input
                  className="p-5 "
                  type="file"
                  id="img"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button
                onClick={handleUpload}
                className="border-none p-2 w-[100px] self-start text-white font-base bg-[#1dbf73]
                 text-[18px] cursor-pointer rounded-md hover:bg-[#10b981]"
              >
                {uploading ? "uploading" : "upload"}
              </button>
            </div>
            <label htmlFor="desc" className="text-[gray] text-[18px]">
              Description
            </label>
            <textarea
              name=""
              id="desc"
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              value={state.desc}
              onChange={handleChange}
            ></textarea>
            <button
              className="border-none p-5 text-white font-medium bg-[#1dbf73] 
              text-[18px] cursor-pointer rounded-md hover:bg-[#10b981]"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
          <div className="details flex-1 flex flex-col gap-2.5 justify-between mt-2">
            <label htmlFor="service" className="text-[gray] text-[18px] mb-1">
              Service Title
            </label>
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="text"
              id="service"
              placeholder="e.g. One-page web design"
              value={state.service}
              onChange={handleChange}
            />
            <label htmlFor="sDesc" className="text-[gray] text-[18px]">
              Short Description
            </label>
            <textarea
              name=""
              id="sDesc"
              placeholder="Short description of your service"
              cols="30"
              rows="10"
              className="p-5 border border-solid border-[lightgrey] rounded-md shadow-sm appearance-none
               focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              value={state.sDesc}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="delivery" className="text-[gray] text-[18px]">
              Delivery Time (e.g. 3 days)
            </label>{" "}
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="number"
              id="delivery"
              value={state.delivery}
              onChange={handleChange}
            />
            <label htmlFor="rev" className="text-[gray] text-[18px]">
              Revision Number
            </label>{" "}
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="number"
              id="rev"
              value={state.rev}
              onChange={handleChange}
            />
            <label htmlFor="features" className="text-[gray] text-[18px]">
              Add Features
            </label>{" "}
            <form
              action=""
              className="flex flex-col gap-2.5"
              onSubmit={handleFeature}
            >
              <input
                type="text"
                name="features"
                id="features"
                placeholder="e.g. page design"
                className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              />
              <button
                className="border-none p-2 w-[100px] self-start text-white font-base 
             bg-[#1dbf73] text-[18px] cursor-pointer rounded-md hover:bg-[#10b981]"
              >
                Add
              </button>
            </form>
            <div className="addedFeatures flex flex-wrap gap-2.5">
              {state.features.map((f, index) => (
                <div
                  className="p-2 flex justify-between items-center gap-2.5"
                  key={index}
                >
                  {f}
                  <button
                    className="self-start flex items-center justify-center bg-[#1dbf73]
          text-white rounded-full w-[20px] h-[20px] pb-[5px] cursor-pointer mb-3"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="price" className="text-[gray] text-[18px]">
              Price
            </label>{" "}
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="number"
              id="price"
              value={state.price}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add;
