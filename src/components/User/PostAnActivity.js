import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setShowBackdrop } from '../../features/backdrop/BackdropSlice'
import { setMessage } from '../../features/message/MessageSlice'

function PostAnActivity() {
    const [title,setTitle]=useState("")
    const [city,setCity]=useState("")
    const [address,setAddress]=useState("")
    const [phone,setPhone]=useState("")
    const [desc,setDesc]=useState("")
    const [pic,setPic]=useState(null)
    const dispatch=useDispatch()

    const handlePostSubmit=()=>{
        if(title.length<2){
            dispatch(setMessage({
                message:"Select a title",
                color:"red",
                active:true
            }))
            return
        }
        if(city.length<2){
            dispatch(setMessage({
                message:"select valid city",
                color:"red",
                active:true
            }))
            return
        }
        if(address.length<2){
            dispatch(setMessage({
                message:"enter valid address",
                color:"red",
                active:true
            }))
            return
        }
        if(phone.length<6){
            dispatch(setMessage({
                message:"enter valid phone number",
                color:"red",
                active:true
            }))
            return
        }
        if(desc.length<10){
            dispatch(setMessage({
                message:"Please enter description",
                color:"red",
                active:true
            }))
            return
        }
        
        const postData=new FormData()
        postData.append("title",title)
        postData.append("city",city)
        postData.append("address",address)
        postData.append("phone",phone)
        postData.append("desc",desc)
        if(pic){
            postData.append("pic",pic,pic.name)
        }
        else{
            dispatch(setMessage({
                message:"select the pic",
                color:"red",
                active:true
            }))
            return
        }
        dispatch(setShowBackdrop(true))
        
        axios.post("https://the-helping-spoon-django.herokuapp.com/api/feeds",postData,{
          
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Token  ${localStorage.getItem("TOKEN")}`
                },
           
                
            }).then(response=>{
            dispatch(setShowBackdrop(false))
            dispatch(setMessage({
                message:response.data.msg+" please view",
                color: "green",
                active:true
            }))
        })
        .catch(res=>{
            dispatch(setShowBackdrop(false))
            dispatch(setMessage({
                message:"Error occured try again later",
                color: "red",
                active:true
            }))
        })

    }
    return (
        <Container>
            <FormField 
            value={title}
            onChange={e=>setTitle(e.target.value)}
            placeholder="Title"
            />
            <FormField 
            value={city}
            onChange={e=>setCity(e.target.value)}
            placeholder="City"
            />
            <FormField 
            value={address}
            onChange={e=>setAddress(e.target.value)}
            placeholder="Address"
            />
            <FormField 
            value={phone}
            onChange={e=>setPhone(e.target.value)}
            placeholder="Phone Number"
            />
            <FormTextField 
            value={desc}
            onChange={e=>setDesc(e.target.value)}
            placeholder="Description"
            rows={5}
            />
            <FormField 
            onChange={e=>setPic(e.target.files[0])}
            placeholder="select pic"
            type="file"
            />
            <FormButton
            onClick={handlePostSubmit}
            >Post</FormButton>
        </Container>
    )
}

export default PostAnActivity

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const FormField=styled.input`
    width: 40%;
    height: 30px;
    border: none;
    border-radius: 8px;
    box-shadow:4px 4px 10px rgb(34,21,21);
    margin-top: 10px;
    outline:none;
    padding: 5px;
    font-size: 18px;
    @media (max-width:786px){
        width: 80%;
    }
`

const FormTextField=styled.textarea`
    width: 40%;
    border: none;
    border-radius: 8px;
    box-shadow:4px 4px 10px rgb(34,21,21);
    margin-top: 10px;
    outline:none;
    padding: 5px;
    font-size: 18px;
    
    @media (max-width:786px){
        width: 80%;
    }
`

const FormButton=styled.button`
    margin: 10px;
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    background-color: rgb(34,21,21);
    color: white;
    cursor: pointer;
    width: 10%;
    margin-right: 30%;
    @media (max-width:786px){
        width: 30%;
        margin-right: 50%;
    }
`