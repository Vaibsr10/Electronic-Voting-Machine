import React, {useState} from "react";
import Result from "./Result";
import ReactDOM from "react-dom/client";
import openssl from "openssl-nodejs";
import Aap from './Aap.jpeg';
import Congress from './Congress.jpeg';
import BJP from './BJP.jpeg';
const openssl = require("openssl-nodejs")

function EVM()
{
    const [aapcounter, setAapCounter]= useState(0);
    const [congresscounter, setCongressCounter]= useState(0);
    const [bjpcounter, setBjpCounter]= useState(0);

    const handleAapButton=()=>{
        setAapCounter(aapcounter+1);
    }
    const handleCongressButton=()=>{
        setCongressCounter(congresscounter+1);
    }
    const handleBjpButton=()=>{
        setBjpCounter(bjpcounter+1);
    }
    const handleResultButton=()=>{
        const root=ReactDOM.createRoot(
            document.getElementById("root"));
            if(bjpcounter>congresscounter&&bjpcounter>>aapcounter)
                {
                    root.render(<Result data={"BJP is Winner"}></Result>)
                }
            if(congresscounter>bjpcounter&&congresscounter>aapcounter)
                {
                    root.render(<Result data={"Congress is Winner"}></Result>)
                }
            if(aapcounter>bjpcounter&&aapcounter>congresscounter)
                {
                    root.render(<Result data={"Aap is Winner"}></Result>)
                }
    }
    const handleFraudButton=()=>{
        const root = ReactDOM.createRoot(
            document.getElementById("root"));
            root.render(<Result data={"BJP is Winner"}></Result>)
    }
    return(
        <div>
            <center>
                <h4 style={{backgroundColor:"orangered",color:"white"}}>
                    Indian Electronic Voting Machine </h4>
                <table>
                    <tr>
                        <th> Netaji ka Code </th>
                        <th> Netaji ka Naam </th>
                        <th> Chunav Chinh </th>
                        <th> Vote </th>
                        <th> Counting </th>
                    </tr>
                    <tr>
                        <td> 1001 </td>
                        <td> Arvind Kejriwal </td>
                        <td> <img src={Aap} height={50} width={50}></img> </td>
                        <td> <button type="submit" onClick={handleAapButton}> Aap </button></td>
                        <td> {aapcounter} </td>
                    </tr>
                    <tr>
                    <td> 1002 </td>
                        <td> Rahul Gandhi </td>
                        <td> <img src={Congress} height={50} width={50}></img> </td>
                        <td> <button type="submit" onClick={handleCongressButton}> Congress </button></td>
                        <td> {congresscounter} </td>
                    </tr>
                    <tr>
                    <td> 1003 </td>
                        <td> Narendra Modi </td>
                        <td> <img src={BJP} height={50} width={50}></img> </td>
                        <td> <button type="submit" onClick={handleBjpButton}> BJP </button></td>
                        <td> {bjpcounter} </td>
                    </tr>
                </table>
                <button type="submit" onClick={handleResultButton}> Result </button>
                <button type="submit" onClick={handleFraudButton}> Fraud </button>
            </center>
        </div>
    )
}export default EVM;