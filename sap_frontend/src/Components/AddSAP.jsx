import React, { useState,useEffect } from 'react'
import { useDropzone } from 'react-dropzone';   
import {useParams} from 'react-router-dom';
import * as api from '../api';

function AddSAP() {
  const {id} = useParams();
  const [image, setImage] = useState(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/',
    onDrop: acceptedFiles => {
      if(acceptedFiles[0].path.split(".")[1] == "png" || acceptedFiles[0].path.split(".")[1] == "jpg") {

        setImage(acceptedFiles[0]);
      }
    },
  });

  var catego = ["Select","Paper Presentation","Project Presentation","Techo Events","Sports/Games","Membership","LeaderShip/Organising", "VAC/Online Course","Paper/Patent/Copyright","GATE/CAT/Govt exams","placement and intern","Enterprneurship","Social Activity"]

  var subcatego = ["Select","Submitted","Presented","Prize","Participated","NCC/NSS","Professional Society","Clubs","Chairman/Secretary/Treasurer","Joint Secretary/Vice Chairman","EC member","Representatives/Coordinator","VAC(NC)","NPTEL","SCI indexed","WOS/Scopus","Other Journal/Conference","Patent","Copyright","Appeared","Qualified","Good National Ranking","Cleared","Written Test Cleared","Placed","Placed with intern","intern without placement","workshop attended","registered for startup","released product","Community Services"]

  var subcatego1 = ["Select","Inside","Outside","Premier","State","National/InterNational","Zone/Outside","State/InterZone","1c","2c","3c","Submitted","Published","Applied","Obtained","Appeared","Blood Donation","NSS/NCC(1-2 week)","NSS/NCC(+2 weeks)"]

  var marks = {
    "Paper Presentation": {"Submitted":{"Select":2},"Presented":{"Inside":5,"Outside":10,"Premier":20},"Prize":{"Inside":20,"Outside":30,"Premier":50}},
    "Project Presentation": {"Submitted":{"Select":5},"Presented":{"Inside":10,"Outside":15,"Premier":20},"Prize":{"Inside":20,"Outside":30,"Premier":50}},
  }
  const [Name, setName] = useState(null);
  const [Category, setCategory] = useState("Select");
  const [SubCategory, setSubCategory] = useState("Select");
  const [SubCategory1, setSubCategory1] = useState("Select");
  const [user,setUser] = useState(null);

  useEffect(()=>{
    api.Profile(id).then((resp)=>{setUser(resp.data)});
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(marks[Category])
    var points = marks[Category][SubCategory][SubCategory1];
    api.SapAdd(id,{name:Name,proof:image.path,category:Category,sub_category:SubCategory,io:SubCategory1, points,rollno:user.rollno,year:user.year,classname:user.classname}).then((resp)=>{console.log(resp.data)});
  }

  return (
    <div className="fixed h-full w-full flex justify-center items-center">
    <div className=" w-4/6  h-4/5 bg-white rounded-xl p-10 flex" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
        <div className="w-2/4 h-full flex justify-center items-center bg-lightgray border-1 border-black border-dotted ">
        <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        image?
          image &&
              (image.path.split(".")[1] == "png" || image.path.split(".")[1] == "jpg") &&
          <img src={URL.createObjectURL(image)} alt="uploaded image" />
          :
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p className='text-xl text-white bg-secondarygreen px-5 py-1 rounded-lg cursor-pointer'>Upload</p>
      }
    </div>
        </div>
        <div className="w-2/3 h-full px-5 ">
          <div className="flex flex-col">
            <div className="text-4xl text-gray font-bold ">Activity</div>
            <div className="grid grid-cols-1   auto-cols-max py-5 gap-3 w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-2/12 mb-2  p-2 border-2 border-neutral-200 rounded-sm  hover:border-gray-300"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required />
              <select
                className="block appearance-none mb-2 h-2/12 w-full bg-white border-neutral-200 border-2 hover:border-gray-300 p-2 rounded-sm  leading-tight focus:outline-none focus:shadow-outline "
                placeholder='Category'
              onChange={(e) => setCategory(e.target.value)}
              >
                {
                  catego.map(c => {
                    return(
                      <option>{c}</option>
                    )})
                }
                </select>
              <select
                className="block appearance-none mb-2 h-2/12 w-full bg-white border-neutral-200 border-2 hover:border-gray-300 p-2 rounded-sm  leading-tight focus:outline-none focus:shadow-outline "
                placeholder='Sub Category'
              onChange={(e) => setSubCategory(e.target.value)}
              >
                {
                  subcatego.map(c => {
                    return(
                      <option>{c}</option>
                    )})
                }
                </select>
              <select
                className="block appearance-none mb-2 h-2/12 w-full bg-white border-neutral-200 border-2 hover:border-gray-300 p-2 rounded-sm  leading-tight focus:outline-none focus:shadow-outline "
                placeholder='Sub Category'
              onChange={(e) => setSubCategory1(e.target.value)}
              >
                {
                  subcatego1.map(c => {
                    return(
                      <option>{c}</option>
                    )})
                }
                </select>

              <div className='text-center'>
              <button className='bg-primarygreen w-[150px] rounded-lg text-[20px] text-center' onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div> 
  )
}

export default AddSAP
