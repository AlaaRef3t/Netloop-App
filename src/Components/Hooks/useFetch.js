import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useFetch(endPoint) {

    function getBrands() {
        
        return axios.get(`https://ecommerce.routemisr.com/api/v1/${endPoint}`)
    }
 
    let { data } = useQuery({
        queryKey: ["allData"],
        queryFn: getBrands,
        select:(data)=> data.data
   })

  return {data}
}
