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
  const [fileNames, setFileNames] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = React.useReducer(gigReducer, INITIAL_STATE);
  const [errors, setErrors] = useState({});
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
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    const newErrors = {};
    if (!state.title) newErrors.title = "Title is required";
    if (!state.desc) newErrors.desc = "Description is required";
    if (!state.cat) newErrors.cat = "Category is required";
    if (!state.price) newErrors.price = "Price is required";
    if (!state.cover) newErrors.cover = "Cover image is required";
    if (!state.shortTitle) newErrors.shortTitle = "Service title is required";
    if (!state.shortDesc) newErrors.shortDesc = "Short description is required";
    if (!state.deliveryTime)
      newErrors.deliveryTime = "Delivery time is required";
    if (!state.revisionNumber)
      newErrors.revisionNumber = "Revision number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    mutation.mutate(state);
    navigate("/mygigs");
  };

  const handleFilesChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);
    setFileNames(Array.from(selectedFiles).map((file) => file.name));
  };

  return (
    <div className="add flex justify-center">
      <div className="container w-[1400px] p-[50px] pl-0 pr-0">
        <h1 className="w-max mb-[30px] text-[gray] font-light text-2xl">
          Add New Gig
        </h1>
        <div className="sections flex justify-between gap-24">
          <div className="info flex-1 flex flex-col gap-2.5 justify-between">
            <label htmlFor="title" className="text-[gray] text-[18px]">
              Title<span className="text-[red]">*</span>
            </label>
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="text"
              id="title"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            {errors.title && <span className="text-[#ef4444] text-sm block mt-0 ">{errors.title}</span>}
            <label htmlFor="cats" className="text-[gray] text-[18px]">
              Category
            </label>
            <select
              onChange={handleChange}
              name="cat"
              id="cats"
              className="p-5  border-solid  block w-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md 
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            >
              <option
                className="text-base font-light"
                value="Graphics & Design"
              >
                Graphics & Design
              </option>
              <option
                className="text-base font-light"
                value="Digital Marketing"
              >
                Digital Marketing
              </option>
              <option
                className="text-base font-light"
                value="Writing & Translation"
              >
                Writing & Translation
              </option>
              <option
                className="text-base font-light"
                value="Video & Animation"
              >
                Video & Animation
              </option>
              <option className="text-base font-light" value="Music & Audio">
                Music & Audio
              </option>
              <option
                className="text-base font-light"
                value="Programming & Tech"
              >
                Programming & Tech
              </option>
              <option
                className="text-base font-light"
                value="Business & Management"
              >
                Business & Management
              </option>
              <option className="text-base font-light" value="Finance">
                Finance
              </option>
              <option className="text-base font-light" value="AI Services">
                AI Services
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
                {errors.cover && <span className="text-[#ef4444] text-sm block mt-0 ">{errors.cover}</span>}
                <label htmlFor="img" className="text-[gray] text-[18px]">
                  Upload Images
                </label>
                <input
                  className="p-5 "
                  type="file"
                  id="img"
                  multiple
                  onChange={handleFilesChange}
                />
                <div className="selected-files mt-2">
                  {fileNames.map((name, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      {name}
                    </div>
                  ))}
                </div>
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
              name="desc"
              id="desc"
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              onChange={handleChange}
            ></textarea>
            {errors.desc && <span className="text-[#ef4444] text-sm block mt-0 ">{errors.desc}</span>}
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
              name="shortTitle"
              placeholder="e.g. One-page web design"
              onChange={handleChange}
            />
            <label htmlFor="sDesc" className="text-[gray] text-[18px]">
              Short Description
            </label>
            <textarea
              name="shortDesc"
              id="sDesc"
              placeholder="Short description of your service"
              cols="30"
              rows="10"
              className="p-5 border border-solid border-[lightgrey] rounded-md shadow-sm appearance-none
               focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
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
              name="deliveryTime"
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
              name="revisionNumber"
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
              {state.features.map((feature, index) => (
                <div
                  className="p-2 flex justify-between items-center gap-2.5"
                  key={`feature-${index}`}
                >
                  {feature}
                  <button
                    className="removeAddedFeature self-start flex items-center justify-center bg-[#1dbf73]
          text-white rounded-full w-[20px] h-[20px] pb-[5px] cursor-pointer mb-3"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({
                        type: "REMOVE_FEATURE",
                        payload: index,
                      });
                    }}
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
              name="price"
              onChange={handleChange}
            />
            {errors.price && <span className="text-[#ef4444] text-sm block mt-0  ">{errors.price}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add;
