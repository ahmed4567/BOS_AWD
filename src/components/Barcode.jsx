import React from "react";
import { useRef } from "react";
import { useState } from "react";
import ReactBarcode from "react-jsbarcode";
import ReactToPrint from "react-to-print";


const Barcode = (props)=>{

   

    return(
        <div>
            <div>Barcode</div>
            <div>
                <Barcode width={1} height ={40} ref={ref} value={value} />
            </div>
           
        </div>
    )

}