import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { pageBg, text } from "../../theme/backgrounds" 

const CV = () => {
  const theme = useSelector((state) => state.theme.theme)
  const t = text(theme)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState("")

  const handleChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) { setFile(selectedFile); setPreview(URL.createObjectURL(selectedFile)) }
  }

  const handleUpload = () => {
    if (!file) return alert("Select a file")
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => localStorage.setItem("cv", reader.result)
  }

  useEffect(() => {
    const savedCV = localStorage.getItem("cv")
    if (savedCV) setPreview(savedCV)
  }, [])

  return (
    <div className="min-h-screen text-center pt-10 w-full px-6 transition-colors duration-300"
      style={{ background: pageBg(theme) }}>
      <h1 className="text-3xl font-bold mb-6" style={{ color: t.heading }}>My CV</h1>
      <div className="flex flex-col items-center gap-3 mt-10">
       <label
  className="flex items-center gap-2 px-5 py-2 rounded-lg cursor-pointer transition font-semibold"
  style={{
    background: theme === "dark" ? "#facc15" : "#a78bfa",
    color: theme === "dark" ? "#000000" : "#ffffff",
  }}
  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
>
          📄 Choose CV
          <input type="file" className="hidden" onChange={handleChange} />
        </label>
        <button onClick={handleUpload}
          className="px-5 py-2 rounded-lg border transition"
          style={{
            borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db',
            color: t.heading,
            background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#ffffff'
          }}>
          Upload
        </button>
      </div>
      {preview && (
        <iframe src={preview} title="CV Preview"
          className="w-full h-[1000px] mt-6 rounded-lg shadow"
          style={{ border: `1px solid ${theme === 'dark' ? '#4b5563' : '#c4b5fd'}` }} />
      )}
    </div>
  )
}

export default CV