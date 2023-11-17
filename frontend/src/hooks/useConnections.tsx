import { useRef, useState } from "react"
import axios from "axios"
import { Id, toast } from "react-toastify"
import { useAuth } from "./useAuth"

const useConnections = () =>{



    const acceptConnection = async (

    ) => {
        await axios({
            method: "post",
            data: {

            }

        })
        .then(() => {

        })
        .catch((e) => {

        })

    }

    const rejectConnection = async (

        ) => {
            await axios({
                method: "post",
                data: {
    
                }
    
            })
            .then(() => {
    
            })
            .catch((e) => {
                
            })
    
        }

    const sendConnection = async (

        ) => {
            await axios({
                method: "post",
                data: {
    
                }
    
            })
            .then(() => {
    
            })
            .catch((e) => {
                
            })
    
        }

}