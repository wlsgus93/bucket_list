import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const Detail = (props) => {
    const params = useParams();
    const bucket_list= useSelector( (state) => state.bucket.list)
    const bucket_index=params.index;
    console.log(params)
    console.log(bucket_list)
  return (
      <>
  <h1>상세 페이지입니다!</h1>
  <h1>{bucket_list[bucket_index]}</h1>
  </>); 
};

export default Detail;