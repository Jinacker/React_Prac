import {useParams} from "react-router-dom"; // Edit/n 이거 표시할라고 쓰는거

const Edit = () => {
    const params = useParams();
    return <div>{params.id}번 일기 수정 페이지입니다.</div>;
};

export default Edit;