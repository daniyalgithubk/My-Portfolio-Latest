import React, { useState, useEffect } from "react";

const CV = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const saveToLocalStorage = (file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      localStorage.setItem("cv", reader.result);
      console.log("CV saved to localStorage!");
    };
  };

  useEffect(() => {
    const savedCV = localStorage.getItem("cv");

    if (savedCV) {
      setPreview(savedCV);
    }
  }, []);

  const handleUpload = () => {
    if (!file) return alert("Select a file");

    saveToLocalStorage(file);
  };

  return (
    <div className="text-center mt-10 w-full px-6">
      <div className="flex flex-col items-center gap-3 mt-10">
        <label className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
          📄 Choose CV
          <input type="file" className="hidden" onChange={handleChange} />
        </label>

        <button
          className="border px-5 py-2 rounded-lg hover:bg-gray-100"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>

      {preview && (
        <iframe
          src={preview}
          title="CV Preview"
          className="w-full h-[1000px] mt-6 border rounded-lg shadow"
        />
      )}
    </div>
  );
};

export default CV;
