import { useSearchParams } from "react-router-dom"; // query string 사용법. => 뭔가 검색 기능에 쓰일것 같음.

const Home = () => {
    // ex) value = hello 로 넣었을때 이렇게 하면 hello가 출력됨.
    const [params, setParams] = useSearchParams(); // state와 비슷
    console.log(params.get("value")); // 이렇게 가져와서 쓰면 된다. 현재 params에 저장된 값 가져오기.

    return <div>Home</div>
}

export default Home;