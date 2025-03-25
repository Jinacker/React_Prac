import { useEffect } from "react";
// 페이지마다 이름 바꾸기용 커스텀훅

const usePageTitle = (title) => {
useEffect(()=>{
    const $title = document.getElementsByTagName("title")[0]; // 관례상 $ 붙임
    $title.innerText = title;
},[title]);
};

export default usePageTitle;