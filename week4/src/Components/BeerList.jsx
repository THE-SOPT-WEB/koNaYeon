import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const getLocation = (errHandler) => {
  if ("geolocation" in navigator) {
      return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {
            coords: { latitude: y, longitude: x },
          } = position;
          resolve({ x, y });
          console.log(x,y)
        },
        (e) => {
          alert("HTTPS 연결을 확인해주세요.");
          errHandler && errHandler();
        }
      );
    });
  }

  return { x: 126.8350976, y: 37.617664 };
};

// 1 (using async-await)
async function 위치가져오기() {
  const result = await getLocation();
  console.log(result)
}


// 2 (using promise / then)
getLocation().then((result) => 내근처맥주집가져오기()); 



async function 내근처맥주집가져오기() {
	const result = await axios.get(
		"https://dapi.kakao.com/v2/local/search/keyword",
		{
			headers: {
				Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
			},
			params: {
				x: 경도값,
				y: 위도값,
				radius: 1000,
				query: '맥주',
			}
		}
  )
};

async function 특정지역맥주집가져오기(location) {
	const result = await axios.get(
		"https://dapi.kakao.com/v2/local/search/keyword",
		{
			headers: {
				Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
			},
			params: {
				query: location + " " + '맥주',
			}
		}
  )
};



function BeerList() {
  return (
    //위치가져오기()
    내근처맥주집가져오기()
  )
  
}
/*
function BeerList() {
  const [beerList, setBeerList] = useState([])
  const articleRef = useRef(null);

  
  const getBeerList = async () => {
    // 맥주집 리스트 가져오기
  };

  useEffect(() => {
    getBeerList();
  }, []);

  const handleSubmit = (e) => {
    console.log(articleRef.current.children);
  }

  return (
    <Container>
      <h1>우리 동네 맥주집</h1>
      <article ref={articleRef} onSubmit={(e) => handleSubmit(e)}>
        <h2><label>지역 기반으로 검색할게요</label><input type="checkbox" id="check" /></h2>
        <h2>우리 동네는 여기에요</h2>
        <input type="search" placeholder='지역을 입력해주세요.' />
        <input type="submit" value="검색하기" />
      </article>
      <beerList>
        { showBeerList() }
      </beerList>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
`
*/
export default BeerList;