import {useParams} from "react-router-dom"; // 페이지의 URL 파라미터를 가져오는 훅임. 

const Diary = () => {
    const params = useParams();
    console.log(params);
    return <div>{params.id}번 일기입니다.</div>
}

export default Diary;

