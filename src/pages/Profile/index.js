import React from 'react'
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

function Profile() {
  const params = useParams();

  console.log(params.nickname);
  return (
    <div>Profile page {params.nickname}</div>
  )
}

export default Profile