import * as api from '../api'
import {setAlert} from './alert'
import {setCurrentUser} from './currentUser'
import {getMyDetails} from './myDetails'
import {getAllUsers} from './user'

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.UserLogin(authData)
        dispatch({type: "AUTH", payload: data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("sap_portal"))))
        dispatch(getMyDetails())

        dispatch(setAlert("Login Successfull", "success"))

        navigate(`/home/${data._id}`)
    } catch (error) {
        dispatch(setAlert(error.response.data, 'danger'))
    }
}

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.UserSignup(authData)
        dispatch({type: "AUTH", payload: data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("sap_portal"))))
        dispatch(setAlert("User Created successfully", "success"))
        navigate(`/home/${data._id}`)
    } catch (error) {
        dispatch(setAlert(error.response.data, 'danger'))
    }
}

export const staffsignup = (authData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.StaffSignup(authData)
        dispatch({type: "AUTH", payload: data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("sap_portal"))))
        dispatch(setAlert("Staff Created successfully", "success"))
        navigate(`/home/${data._id}`)
    } catch (error) {
        dispatch(setAlert(error.response.data, 'danger'))
    }
}

//export const updateProfile = (profileData, navigate) => async (dispatch) => {
//    try {
//        await api.createProfile(profileData)
//        const {user} = await JSON.parse(localStorage.getItem("sap_portal"))
//        dispatch(getMyDetails())
//        dispatch(setAlert("Profile created Successfully", "success"))
//        navigate(`/profile/${user._id}`)
//        //navigate("/home")
//    } catch (error) {
//        console.log(error)
//        dispatch(setAlert(error.response.data, 'danger'))
//    }
//}

