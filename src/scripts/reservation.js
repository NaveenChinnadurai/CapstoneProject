import { useState } from "react"

const defaultBookings=[
    {
        name:"Thamarai",
        mobileNo:"9514357721",
        email:"thamraiharini143@gmail.com",
        count:2,
        date:Date("01/05/2024"),
        time:"18:00",
        occasion:"Anniversary"
    },
    {
        name:"Munees",
        mobileNo:"782471128",
        email:"muneesnandhini@gmail.com",
        count:3,
        date:Date("01/17/2024"),
        time:"17:00",
        occasion:"Birthday"
    },
    {
        name:"Jana",
        mobileNo:"6357426723",
        email:"janatonygamer@gmail.com",
        count:2,
        date:Date("01/31/2024"),
        time:"17:00",
        occasion:"Farewell Party"
    },
    {
        name:"Jana",
        mobileNo:"6357426723",
        email:"janatonygamer@gmail.com",
        count:40,
        date:Date("01/31/2024"),
        time:"17:00",
        occasion:"Farewell Party"
    },
    {
        name:"Dhanush",
        mobileNo:"7234671483",
        email:"dhanushlakshmi143@gmail.com",
        count:4,
        date:Date("03/02/2024"),
        time:"18:00",
        occasion:"Birthday"
    }
]

export function setBookings(props) {
    defaultBookings.push(props)
    console.log(defaultBookings)
}