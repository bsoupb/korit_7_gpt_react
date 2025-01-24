import { Route, Routes, useLocation } from "react-router-dom";
import WritePage from "./pages/WritePage/WritePage";
import IndexPage from "./pages/IndexPage/IndexPage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainLayout from "./components/MainLayout/MainLayout";
import ListPage from "./pages/ListPage/ListPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { accessTokenAtomState } from "./atoms/authAtom";

function App() {
  const [ accessToken, setAccessToken ] = useRecoilState(accessTokenAtomState);

  const authenticatedUser = async () => {
    return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,
        }
      });
  }

  const authenticatedUserQuery = useQuery(
    ["authenticatedUserQuery"],   // 쿼리의 고유한 키를 설정
     authenticatedUser,   // 데이터를 가져오는 함수 -> 실제로 인증된 사용자의 데이터를 서버에서 가져오는 역할
    {                                 // 옵션
      retry: 0,
      refetchOnWindowFocus: false,    // 사용자가 브라우저 창에 다시 초점을 맞출 때 데이터를 다시 가져오지 않도록
      enabled: !!accessToken,   // 로컬 저장소에 AccessToken이 존재할 때만 쿼리를 활성화
    }
    );

  return (
    <>
      <Global styles={global} />
      {
        authenticatedUserQuery.isLoading  // 어떤 데이터를 처음 가져올 때 사용
      ? 
        <></> // true일 경우 아무것도 안보임
      :
      <MainLayout>
        <Routes>
          <Route path="/" element={ <IndexPage /> } />
          <Route path="/write" element={ <WritePage /> } />
          <Route path="/list" element={ <ListPage /> } />
          <Route path="/signup" element={ <SignupPage /> } />
          <Route path="/signin" element={ <SigninPage /> } />
        </Routes>
      </MainLayout>
      }
      
    </>
  );  
}

export default App;
