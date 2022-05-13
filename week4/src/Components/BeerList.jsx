import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';


function BeerList() {
  const [beerList, setBeerList] = useState([])
  const [location, setLocation] = useState([])

  const articleRef = useRef(null);

  
  // useEffect(() => {
  //   getBeerList();
  // }, []);


  // 현재 위치의 위도와 경도 정보
  const getLocation = (errHandler) => {
    if ("geolocation" in navigator) {
        return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {
              coords: { latitude: y, longitude: x },
            } = position;
            resolve({ x, y });
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
    async function getBeerList() {
      const result = await getLocation();
      //getBeerStore(result)
      setLocation(result)
    }
    
    
    // 2 (using promise / then)
    // getLocation().then(position => {
    //    // console(position);
    //    // getBeerStore(position)
    // })
    
    
    // 내 근처 맥주집 가져오기
    async function getBeerStore() {
      const {
        data: { documents },
      } = await axios.get(
        "https://dapi.kakao.com/v2/local/search/keyword",
        {
          headers: {
            Authorization: `KakaoAK ${ process.env.VITE_APP_KAKAO_AK }`,
          },
          params: {
            x: location.x,
            y: location.y,
            radius: 1000,
            query: '맥주',
          }
        }
        
      )
      setBeerList(showStoreList(getBeerStore()));
      // setBeerList(showStoreList(documents));

    };
  

  const handleSubmit = (e) => {
    e.preventDefault(); 
    getBeerList();
  }

  // 특정 지역 맥주집 가져오기
  async function getSearchBeerStore(location) {
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${process.env.VITE_APP_KAKAO_AK}`,
        },
        params: {
          query: location + " " + '맥주',
        }
      }
    )
  };
  
  // 가게이름(링크), 전화번호, 현재 나로부터의 위치
  const showStoreList = () => {
    return beerList.map(({ place_name, place_url, phone, distance }) => (
      <Store>
        <a href={ place_url } className="storeName">{ place_name }</a>
        <p className="phoneNumber">{ phone } </p>
        <p className="location">{ distance } </p>
      </Store>
    ));
  };



  
  return (
    <Container>
      <h1 className='title'>🍻 우리 동네 맥주집 🍻</h1><hr></hr>
      <article ref={ articleRef } onSubmit={(e) => handleSubmit(e)}>
        <h2><label>지역 기반으로 검색할게요</label><input type="checkbox" id="check" /></h2>
        <h2>우리 동네는 여기에요</h2>
        <input type="search" placeholder='지역을 입력해주세요.' />
        <input type="submit" value="검색하기" />
      </article>
      <hr></hr>
      <Beer>
        { showStoreList() }
      </Beer>
    </Container>
  );
  }


const Container = styled.div`
  margin: 0;
  padding: 10px 0px;
  background-color: black;
  color: white;
  text-align: center;
  
`

const Store = styled.div`
  //
`

const Beer = styled.article`
  background-color: black;
  height: 200px;
  width:100%;
`


export default BeerList;