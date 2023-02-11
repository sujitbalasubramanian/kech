import React,{useState,useEffect} from 'react'
import profile from '../../assets/demo_profile.png'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../../Components/Nav'
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as api from '../../api'
import background from '../../assets/background.png'
import JsPDF from 'jspdf'


function Report(){

  const [people,setPeople] = useState(null);
  const [batch, setBatch] = useState("Select");
  const [sec, setSec] = useState("Select");
  const [Category, setCategory] = useState("Select");
  const [SubCategory, setSubCategory] = useState("Select");
  const [SubCategory1, setSubCategory1] = useState("Select");

  var batchlist = ["Batch","I","II","III","IV"]
  var section = ["Class","A","B","C","D"]
  var catego = ["Category","Paper Presentation","Project Presentation","Techo Events","Sports/Games","Membership","LeaderShip/Organising", "VAC/Online Course","Paper/Patent/Copyright","GATE/CAT/Govt exams","placement and intern","Enterprneurship","Social Activity"]

  var subcatego = ["SubCategory","Submitted","Presented","Prize","Participated","NCC/NSS","Professional Society","Clubs","Chairman/Secretary/Treasurer","Joint Secretary/Vice Chairman","EC member","Representatives/Coordinator","VAC(NC)","NPTEL","SCI indexed","WOS/Scopus","Other Journal/Conference","Patent","Copyright","Appeared","Qualified","Good National Ranking","Cleared","Written Test Cleared","Placed","Placed with intern","intern without placement","workshop attended","registered for startup","released product","Community Services"]

  var subcatego1 = ["SubCategory","Inside","Outside","Premier","State","National/InterNational","Zone/Outside","State/InterZone","1c","2c","3c","Submitted","Published","Applied","Obtained","Appeared","Blood Donation","NSS/NCC(1-2 week)","NSS/NCC(+2 weeks)"]

  useEffect(()=>{
    console.log(Category,SubCategory,SubCategory1)
    api.SapAllFilter({category:Category,sub_category:SubCategory,io:SubCategory1,classname:sec,year:batch}).then((resp)=>{setPeople(resp.data)});
  },[])
  console.log(people)

  const generatePDF = () => {

    const report = new JsPDF('portrait','pt','a4');
    report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf');
    });}

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape  
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);

    const title = "Students Report";
    const headers = [["Rollno", "Year","Class","NAME", "Catagory","Sub Catagory","Sub Catagory","SAP"]];

    const data = people.map(elt=> [elt.rollno,elt.year,elt.classname, elt.name,elt.category,elt.sub_category,elt.io!=="Select"?elt.io:"",elt.points]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }

  return (
    <div className="flex h-screen w-full">
      <Nav/>
      <div className="h-full w-full  p-5 pl-20 lg:p-10 lg:pl-32">
        <div className="h-2/4 flex justify-center">
          <div className="h-60 w-full rounded-xl p-12 px-20 relative flex flex-col justify-between " style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
            <div className="flex flex-col">
              <div className="flex  justify-between">
                <div className="flex flex-col mb-3">
                  <div className="text-4xl text-blue font-bold">AI</div>
                  <div className="text-ld text-gray font-light ">Get your class report</div>
                </div>
                <div className="text-white bg-secondarygreen text-xl font-bold h-3/5 w-40 flex justify-center items-center rounded-md " onClick={generatePDF}>Get Proof</div>
                <div className="text-white bg-secondarygreen text-xl font-bold h-3/5 w-40 flex justify-center items-center rounded-md " onClick={exportPDF}>Get Report</div>
              </div>
              <div className="flex justify-between">
                <form action="" className="flex    justify-between">
                  <div class="relative">
                    <select class="block appearance-none h-2/12 w-60 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'
                      onChange={async(e)=>{
                        setBatch(e.target.value)
                        await api.SapAllFilter({category:Category,sub_category:SubCategory,io:SubCategory1,classname:sec,year:e.target.value}).then((resp)=>{setPeople(resp.data);});
                      }}
                    >
                      {
                        batchlist.map(c => {
                          return(
                            <option>{c}</option>
                          )})
                      }
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
                    </div>
                  </div>
                </form>
                <form action="" className="flex    justify-between">
                  <div class="relative">
                    <select class="block appearance-none h-2/12 w-60 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'
                      onChange={async(e)=>{
                        setSec(e.target.value)
                        await api.SapAllFilter({category:Category,sub_category:SubCategory,io:SubCategory1,year:batch,classname:e.target.value}).then((resp)=>{setPeople(resp.data);});
                      }}
                    >
                      {
                        section.map(c => {
                          return(
                            <option>{c}</option>
                          )})
                      }
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
                    </div>
                  </div>
                </form>
                <form action="" className="flex    justify-between">
                  <div class="relative">
                    <select class="block appearance-none h-2/12 w-60 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'
                      onChange={async(e)=>{
                        setCategory(e.target.value)
                        await api.SapAllFilter({category:e.target.value,sub_category:SubCategory,io:SubCategory1,year: batch,classname: sec}).then((resp)=>{setPeople(resp.data);});
                      }}
                    >
                      {
                        catego.map(c => {
                          return(
                            <option>{c}</option>
                          )})
                      }
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
                    </div>
                  </div>
                </form>
                <form action="" className="flex justify-between">
                  <div class="relative">
                    <select class="block appearance-none h-2/12 w-60 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'
                      onChange={async(e)=>{
                        setSubCategory(e.target.value)
                        await api.SapAllFilter({category:Category,sub_category:e.target.value,io:SubCategory1,year: batch,classname: sec}).then((resp)=>{setPeople(resp.data);});
                      }}
                    >
                      {
                        subcatego.map(c => {
                          return(
                            <option>{c}</option>
                          )})
                      }
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
                    </div>
                  </div>
                </form>
                <form action="" className="flex justify-between">
                  <div class="relative">
                    <select class="block appearance-none h-2/12 w-60 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'
                      onChange={async(e)=>{
                        setSubCategory1(e.target.value)
                        await api.SapAllFilter({category:Category,sub_category:SubCategory,io:e.target.value,year: batch,classname: sec}).then((resp)=>{setPeople(resp.data);});
                      }}
                    >
                      {
                        subcatego1.map(c => {
                          return(
                            <option>{c}</option>
                          )})
                      }
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
        <div style={{position: "absolute", top: "-10000px"}}>
          <div id="report" className='mr-auto'>
            <div className='h-full w-full' >
              {
                people && 
                  people.map((p)=>{
                    console.log(p)
                    return(
                      <div>
                        <div className="bg-white  mr-auto mb-5">{p.rollno} + {p.name}</div>
                        <div className='flex justify-center'>
                        <img src={'/'+p.proof} alt="" style={{width:"16cm"}}/>
                        </div>
                      </div>
                    )
              })
                
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Report
