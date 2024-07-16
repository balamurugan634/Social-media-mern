import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { uploadfailure,uploadstart,uploadsuccess } from "../redux/user/userslice";
import { useNavigate } from "react-router-dom";
const Createpost = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { currentuser,loading,error } = useSelector((state) => state.user2);
  const fileref = useRef(null);
  const [file, setFile] = useState([]);
  const [formdata, setFormdata] = useState({
    img:'',
    text: "",
  });
  const [fileprogress, setFileprogress] = useState(null);
  const [file_error, setFile_error] = useState(false);
  console.log(formdata);
  console.log(fileprogress)
  useEffect(()=>{
    if(file){
      storeimage(file)
      console.log(file)
    }
  },[file])
  // const handleupload = (e) => {
  //   if (file.length > 0 && file.length + formdata.img < 2) {
  //     const promises = [];
  //     for (let i = 0; i < file.length; i++) {
  //       promises.push(storeimage(file[i]));
  //     }
  //     Promise.all(promises)
  //       .then((urls) => {
  //         setFormdata({
  //           ...formdata,
  //           img: formdata.img.concat(urls),
  //         });
  //       })
  //       .catch((err) => {});
  //   } else {
  //   }
  // };
  const storeimage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const filename = new Date().getTime() + file.name;
      const storageref = ref(storage, filename);
      const uploadtask = uploadBytesResumable(storageref, file);
      uploadtask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFileprogress(Math.round(progress))
          console.log(progress);
        },
        (error) => {
          setFile_error(error);
        },
        () => {
          getDownloadURL(uploadtask.snapshot.ref).then((downloadurl) => {
            setFormdata({...formdata,img:downloadurl});
          });
        }
      );
    });
  };
  async function handlesubmit(e) {
    e.preventDefault()
    try{
      dispatch(uploadstart())
      const res=await fetch('/api/post/createpost',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formdata)
      })
      const data=await res.json()
      if(data.success===false){
        dispatch(uploadfailure(data.message))
        console.log(data.message)
      }
      dispatch(uploadsuccess())
      navigate('/')
    }
    catch(error){
      dispatch(uploadfailure(data.message))
      console.log(error)
    }
  }
  return (
    <div className="w-full h-full text-white ">
      <h2 className="w-full  p-2 font-bold text-xl">New post</h2>
      <form onSubmit={handlesubmit} className="flex gap-4 flex-col justify-center w-full p-2 ">
        <div className="flex flex-col justify-center">
          <input
            type="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
            id="img"
            hidden
            ref={fileref}
            accept="image/*"
          />
          <img
            src={formdata.img || "https://wallpapers.com/images/hd/moon-retro-vector-art-7op8fanjrtajdzp0.jpg"}
            alt=""
            onClick={() => fileref.current.click()}
            className="self-center w-full  sm:w-3/4 h-[300px] object-contain r rounded-md cursor-pointer"
          />
          <p className="text-sm self-center">
          {file_error ? (
            <span className="text-red-500">Error in image upload</span>
          ) : fileprogress > 0 && fileprogress < 100 ? (
            <span
              className={
                fileprogress < 50 ? "text-slate-500" : "text-green-700"
              }
            >
              uploading...{fileprogress} %
            </span>
          ) : fileprogress === 100 ? (
            <span className="text-green-700 font-semibold">
              uploaded successfully
            </span>
          ) : (
            ""
          )}
        </p>
        </div>
        <textarea
          className="p-5 rounded-lg bg-stone-950"
          required
          placeholder="description"
          id="text"
          value={formdata.description}
          onChange={(e)=>setFormdata({...formdata,[e.target.id]:e.target.value})}
        />
        <button disabled={loading} className="bg-green-600 disabled:bg-slate-600 font-semibold p-2 hover:opacity-90 rounded-lg text-white shadow-lg w-full md:w-1/2 self-center" type="submit">{loading ? "Loading...." : "Upload"}</button>
      </form>
    </div>
  );
}

export default Createpost;
