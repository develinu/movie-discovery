# GPD React study final homework
개퍼디 리액트 스터디의 마지막 과제입니다.   
요구사항에 따라 웹 페이지 구현을 완성해주세요!

# 사전 지식
프로젝트의 구성에 대한 기본적인 이해를 돕기 위한 설명입니다.   

## 프로젝트 설명
해당 프로젝트는 공개 API인 `OMDb API`를 기반으로 만들어졌습니다.   
(http://www.omdbapi.com/)

`OMDb API`의 영화 메타데이터를 기반으로 백엔드 API 시스템을 구축하였습니다.   
이러한 백엔드 시스템을 통해 필터 기반으로 영화를 검색하고, 해당 영화에 대한 메타데이터를 보여줍니다.   
또한 사용자별 좋아하는 영화 리스트를 서버에 저장하고, 다른 사용자에게 보여줍니다.

## 프로젝트 구성
전체적인 프로젝트 구성을 설명합니다.   
(중요하지 않은 구성은 생략)

### 디렉토리 구조
```
|- public   
    |- assets                     => 프로젝트에 필요한 이미지 리소스   
    index.html                    => 기본 구성 + 폰트 설치 스크립트 추가   
|- src   
    |- components   
        |- Footer.js   
        |- Header.js              => 상단 바 컴포넌트   
        |- Headline.js            => Search page의 헤드라인 텍스트   
        |- Loader.js              => 로딩 프로그레스   
        |- Logo.js                => TopNav의 네비게이션 로고   
        |- MovieCard.js           => MovieList의 요소   
        |- MovieDetail.js         => 영화 상세 컴포넌트   
        |- MovieList.js           => Search 탭의 결과 컴포넌트   
        |- Recommend.js           => Recommend 탭 컴포넌트
        |- Search.js              => Search 탭의 검색 컴포넌트   
        |- TopNav.js              => 상단 바의 네비게이션   
    |- data                       => 프로젝트에 필요한 데이터들   
    |- style                      => scss 스타일. 각 컴포넌트명과 동일   
    App.js   
    App.scss   
    index.css   
    index.js   
```

### 의존성
해당 앱은 create-react-app으로 구성되었습니다.
추가 된 의존성
- react-router-dom@v5
- node-sass
- react-redux

# 기능 요구사항
최소 기능 및 기본적인 스타일은 구성되어 있습니다.    
데이터 형태나 스타일은 수정해도 됩니다.    
아래 요구사항을 추가 구현해주세요.

## 기능1. 상단 네비게이션
1. 상단 네비게이션 바 우측의 Github 아이콘 링크 주소를 본인의 프로젝트 주소로 변경해주세요.(./data/nav.js의 데이터 수정)

## 기능2. Search 탭
1. 검색창의 입력, 장르 선택, 연도 선택 데이터를 `State`와 동기화해주세요.
2. Apply 버튼 클릭 시 `axios`를 통해 서버에서 데이터를 검색해주세요.(선택사항 : 입력 데이터 검증 과정도 있으면 좋습니다)
3. axios로 데이터를 검색하는 동안 `Loader` 컴포넌트를 활용해 로딩중 효과를 적용해주세요.
4. 영화 데이터를 가져오면 Redux 혹은 State에 저장하고, 각 영화 데이터를 `MovieList` 및 `MovieCard` 컴포넌트에 뿌려주세요.    
    (`MovieCard`의 각 컴포넌트는 포스터 이미지를 재요청 하게되고, 해당 이미지가 로딩 될 때까지 로딩바가 나타나도록 구현되어있습니다. 이 과정이 어떻게 구현되었는지 자세히 살펴보세요.)
5. `MovieCard` 클릭 시 `/movie/:id` 경로로 라우팅 후에 `axios`를 통한 영화 상세 정보 요청을 구현해주세요.
6. 영화 상세 정보를 가져오는 도중에는 Loader를 활용하여 로딩중 효과를 적용해주세요.
7. 데이터를 가져오면 `MovieDetail` 컴포넌트에 데이터를 뿌려주세요.
8. 영화 상세 페이지에서 ♡가 비활성 상태일 때 누르면 서버에 해당 데이터를 저장해주세요.   
이후에는 다시 눌러도 아무 동작도 안하도록 구현해주세요.(삭제 API 개발 안됨)
10. Footer.js의 Created by 부분의 이름을 수정해주세요.

```javascript
// 찜하기 데이터 구조
{
  "userId": "String",
  "movies": "Array"
}
```

## 기능3. Recommend 탭(선택사항)
기능 1, 2도 과제양이 상당하기 때문에 먼저 수행한 뒤 여유가 되는 경우에만 수행해주세요!   

1. 찜하기 테이블의 모든 데이터를 가져옵니다.
2. 유저별로 찜한 영화 리스트를 화면에 뿌려주세요.(최대 5개)
3. 해당 요청은 컴포넌트 최초 로드 시 한 번만 요청되도록 구현해주세요.

# API 명세
  다음은 API 명세입니다.   
  해당 API 명세를 참고하여 구현해주세요.
  API의 Endpoint는 배포 된 .env 파일 내에 환경 변수로 작성되어 있습니다.   
  사용 방법은 `data/movieApi.js`의 샘플 코드를 참고해주세요.

**1. 검색 영화 목록 가져오기**
----
  키워드로 검색하여 영화 목록을 가져옵니다.

* **경로 :** `/list`
  
* **Method :** `GET`
  
*  **URL Params**

   **필수 :**
 
   `title - String` : 검색 할 영화 키워드

   **선택 :**
 
   `type - movie|series|episode`  : 검색 유형   
   `year - Integer` : 영화의 출시 연도(기본 값 : "All years")   
   `page - Integer` : 반환 될 검색 결과의 개수(기본 값 : 10)   

* **응답 :**

  * **응답코드 :** 200 <br />
    **내용 :** 
    ```
    [
        {
            Poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
            Title: "The Lion King"
            Type: "movie"
            Year: "1994"
            imdbID: "tt0110357"
        },
        ...
    ]
    ```

**2. 영화 상세 내용 가져오기**
----
  영화의 상세 내용을 가져옵니다.

* **경로 :** `/detail`
  
* **Method :** `GET`
  
*  **URL Params**

   **필수 :**
 
   `id - String` : 영화 아이디

* **응답 :**

  * **응답코드 :** 200 <br />
    **내용 :** 
    ```
    {
        Actors: "Matthew Broderick, Jeremy Irons, James Earl Jones"
        Awards: "Won 2 Oscars. 39 wins & 35 nominations total"
        BoxOffice: "$422,783,777"
        Country: "United States"
        DVD: "04 Oct 2011"
        Director: "Roger Allers, Rob Minkoff"
        Genre: "Animation, Adventure, Drama"
        Language: "English, Swahili, Xhosa, Zulu"
        Metascore: "88"
        Plot: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?"
        Poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
        Production: "N/A"
        Rated: "G"
        Ratings: (3) [{…}, {…}, {…}]
        Released: "24 Jun 1994"
        Response: "True"
        Runtime: "88 min"
        Title: "The Lion King"
        Type: "movie"
        Website: "N/A"
        Writer: "Irene Mecchi, Jonathan Roberts, Linda Woolverton"
        Year: "1994"
        imdbID: "tt0110357"
        imdbRating: "8.5"
        imdbVotes: "995,272"
    }
    ```

**3. 좋아하는 영화 리스트 가져오기**
----
  특정 유저의 좋아하는 영화 목록을 가져옵니다.

* **경로 :** `/like`
  
* **Method :** `GET`
  
*  **URL Params**

   **필수 :**
 
   `userId - String` : 유저 아이디

* **응답 :**

  * **응답코드 :** 200 <br />
    **내용 :** 
    ```
    {
        "movies": [
            "tt238744",
            "tt238745",
            "tt238745"
        ],
        "userId": "INU"
    }
    ```

**4. 좋아하는 영화 추가하기**
----
  특정 유저의 좋아하는 영화 목록에 영화를 추가합니다.

* **경로 :** `/like`
  
* **Method :** `POST`
  
*  **URL Params**

   **필수 :**
 
   `userId - String`  : 유저 아이디   
   `movieId - String` : 영화 아이디

* **응답 :**

  * **응답코드 :** 200 <br />
