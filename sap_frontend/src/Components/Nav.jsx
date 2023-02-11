import React from 'react'
import logo from '../assets/logo.png'
import profile from '../assets/demo_profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate} from 'react-router-dom'
function Nav({uid}) {
  const navigate = useNavigate();
  return (
    <div className="xl:h-screen xl:w-20 w-screen h-20 fixed rounded-r-full" style={{borderTopRightRadius:"40px",borderBottomRightRadius:"40px",boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
            <div className="xl:h-2/4 xl:w-full h-full w-2/4 flex xl:flex-col flex-row">
                <div className="h-10 w-10 xl:h-20 xl:w-20"><img src={logo} alt="" /></div>
                <img src={profile} alt="" className="xl:h-12 xl:w-12 mx-3 p-5 xl:m-4 xl:my-4 xl:p-0 rounded:xl xl:rounded-lg" />
              <div onClick={() => navigate(`/home/${uid}`)}>
                <HomeOutlinedIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large'/>
              </div>
              <div onClick={() => navigate('/event')}>
                <SearchOutlinedIcon className="text-gray  ml-5 mb-5 hover:text-primarygreen" fontSize='large'/>
              </div>
              <div onClick={() => navigate(`/request/${uid}`)}>
                <AddOutlinedIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large'/>
              </div>
            </div>
            <div className="h-2/4 w-full flex flex-col justify-end">
            <LogoutOutlinedIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large'/>
            </div>
        </div>
  )
}

export default Nav
