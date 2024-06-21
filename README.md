# B03조 상어조 입니다!

![Honeycam 2024-06-20 15-30-54](https://github.com/B03-Shark/Jeju/assets/50387658/8879f271-2fc1-4c7b-b51c-5fcf10737f0e)


# 제일 양심 있주

제주시에 있는 착한 가격 업소를 소개하고, 각 업소에 대한 리뷰를 통해서 정보를 공유하는 웹 서비스 입니다.

# ✨ 사이트 보러가기
  예시사이트

# 라이브러리

- styled-reset
- react-router-dom
- styled-components
- axios
- tanstack-query
- tanstack-query dev tools
- react-kakao-maps-sdk
- supabase
- zustand

<br />

## 👥 팀원소개

|                                  김형빈                                  |                                 최연                                 |                                한예슬                                |                                염경원                                |                                 한소영                                  |                                 윤희수                                  |
| :----------------------------------------------------------------------: | :--------------------------------------------------------------------: | :------------------------------------------------------------------: | :------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: |
| <img src="https://github.com/B03-Shark/Jeju/assets/50387658/bfef5720-c3a7-4f5e-ab89-c343419b58e3" width="200"> | <img src="https://github.com/B03-Shark/Jeju/assets/50387658/08fed2b3-13ca-4f3c-b686-10c5d042b5ef" width="200"> | <img src="https://github.com/B03-Shark/Jeju/assets/50387658/74534d48-ddc9-4505-bf04-b10771a4866f" width="200"> | <img src="https://github.com/B03-Shark/Jeju/assets/50387658/e1afd38d-14d5-4987-8e2e-35bcbbc56db0" width="200"> | <img src="https://github.com/B03-Shark/Jeju/assets/50387658/329d91ec-c7f5-49a0-95e1-cb9a4e3dfd09" width="200"> | <img src="https://github.com/B03-Shark/Jeju/assets/50387658/085c98ee-5f4d-4569-80c1-8181bbe4c59e" width="200"> |
|                                   리더                                   |                                  팀원                                  |                                팀원                                |                                 팀원                                 |                                  팀원                                   |                                  팀원                                   |
|               [hb9901](https://github.com/hb9901)                |                [hb9901](https://github.com/hb9901)                 |                 yeseul0809                  |                 [YCDM03](https://github.com/YCDM03)                  |                [fjw1010](https://github.com/fjw1010)                |                [heesu21](https://github.com/heesu21)                |

<br />

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/yarn-%232C8EBB?style=for-the-badge&logo=yarn&logoColor=white"><img src="https://img.shields.io/badge/REACT-%2361DAFB?style=for-the-badge&logo=REACT&logoColor=white"><img src="https://img.shields.io/badge/Supabase-%3FCF8E?style=for-the-badge&logo=Supabase&logoColor=black"><img src="https://img.shields.io/badge/styledcomponents-%23DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/Vite-%646CFF?style=for-the-badge&logo=vite&logoColor=black">

<br />

## 📝 주요 기능

### 메인페이지


- 업종 필터적용하는 모습입니다.

<img src="https://github.com/B03-Shark/Jeju/assets/166012944/326bdb2e-467c-4c3e-8ada-380b695b2d98" width="600px">

- 검색 기능

<img src="https://github.com/B03-Shark/Jeju/assets/50387658/b90859a2-c9e1-4b02-9638-20659d0c98ab" width="600px">


### 로그인



### 게시판



### 상세 페이지

<br />

## 🗂️ 폴더구조

```
📦
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ GlobalStyle.jsx
│  ├─ main.jsx
│  ├─ api
│  │  ├─ api.js
│  │  ├─ image.api.js
│  │  ├─ jejuStore.api.js
│  │  ├─ like.api.js
│  │  └─ review.api.js
│  ├─ assets
│  │  ├─ accomodation.png
│  │  ├─ default-image.png
│  │  ├─ laundry.png
│  │  ├─ marker.png
│  │  ├─ profileDefault.png
│  │  ├─ rest.png
│  │  ├─ restaurant.png
│  │  ├─ salon.png
│  │  ├─ search.png
│  │  └─ store.png
│  ├─ components
│  │  ├─ Auth
│  │  │  └─ auth.js
│  │  ├─ Detail
│  │  │  ├─ LikeBtn.jsx
│  │  │  ├─ Modal.jsx
│  │  │  ├─ ReviewCard.jsx
│  │  │  ├─ ReviewCardList.jsx
│  │  │  ├─ SelectedStoredData.jsx
│  │  │  └─ SelectedStoreMap.jsx
│  │  ├─ Home
│  │  │  ├─ Filter
│  │  │  │  ├─ CheckBox.jsx
│  │  │  │  ├─ Filter.jsx
│  │  │  │  └─ index.js
│  │  │  ├─ List
│  │  │  │  └─ List.jsx
│  │  │  ├─ Search
│  │  │  │  ├─ index.js
│  │  │  │  └─ Search.jsx
│  │  │  ├─ StoreMap
│  │  │  │  ├─ functions.js
│  │  │  │  ├─ index.js
│  │  │  │  └─ StoreMap.jsx
│  │  ├─ LayOut
│  │  |  ├─ Header.jsx
│  │  |  └─ Layout.jsx
│  |  ├─ Login
│  |  ├─ Modal
│  │  │  ├─ ModalBase.jsx
│  │  │  └─ ReviewModal.jsx
│  |  ├─ ReviewsCreate
│  │  │  └─ PostModal.jsx
│  |  └─ SignUp
│  ├─ hooks
│  │  ├─ useJejuStore.jsx
│  │  └─ useSearch.jsx
│  ├─ pages
│  │  ├─ Detail.jsx
│  │  ├─ Home.jsx
│  │  ├─ Login.jsx
│  │  └─ Signup.jsx
│  ├─ provider
│  │  └─ QueryProvider.jsx
│  ├─ share
│  │  └─ Router.jsx
│  ├─ supabase
│  │  └─ supabase.js
│  ├─ zustand
│  │  ├─ filter.store.js
│  │  ├─ filteredjeju.store.js
│  │  └─ searchStore.js
│  └─ shared
│     └─ Router.jsx
├─ .env.local
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ index.html
├─ package.json
├─ jsconfig.js
├─ vite.config.js
└─ yarn.lock
```

<br />

## 🗄️파일설명

### 📂api

- api.js
  - baseURL과 API_KEY 및 params를 설정해줍니다.
- image.api.js
- jejuStore.api.js
  - Encoding API KEY와 Decoding API KEY를 사용하여 제주특별자치도의 제주시_착한가격업소 조회 서비스 오픈 API를 호출합니다.
- like.api.js
  - Supabase API KEY와 URL을 사용하여 like데이터를 CRUD 할 수 있는 API 모음입니다.
- review.api.js
  - Supabase API KEY와 URL을 사용하여 Review 데이터를 CRUD 할 수 있는 API 모음입니다.

### 📂components

- Auth
  - auth.js
    - Login, SignUp 컴포넌트에서 사용할 로그인, 회원가입, 로그아웃 함수가 저장되어있습니다.
    - 헤더나 리뷰 작성시에 쓰일 유저의 닉네임과 같은 정보를 로컬 스토리지에서 가져오는 함수가 저장되어있습니다.
- Detail
  - LikeBtn.jsx
    - 리뷰 카드의 좋아요 버튼을 구현한 컴포넌트 입니다. 사용자를 구분하며,
      Tanstack Query를 사용하여 저장된 캐시데이터를 먼저 Optimisitic Update하고 Supabase에 like CRUD 요청을 보냅니다.
  - Modal.jsx
  - ReviewCard.jsx
    - review api를 호출하여 해당 Data에 맞는 review list를 제공하는 컴포넌트 입니다.
  - ReviewCardList.jsx
    - ReviewCardList 컴포넌트에서 각각의 review 데이터를 전달받아 카드로 만드는 컴포넌트 입니다.
  - SelectedStoredata.jsx
    - 선택된 가게의 상세 정보를 표시합니다.
  - SelectedStoreMap.jsx
    - 선택된 가게의 지도를 확대해서 표시합니다.
- Home
  - Filter
    - 체크박스에 선택한 옵션을 zustand의 store에 저장하고 이를 통해 착한 가격 업소 데이터를 필터링 시켜주는 컴포넌트입니다.
  - List
    - 검색어와 필터 조건에 따라 제주도 가게 목록을 필터링하여 보여주는 리스트 컴포넌트입니다. 
  - Search
    - 착한 가격 업소의 이름을 검색하여 정보를 zustand에 저장하고 이를 착한 가격 업소 데이터에서 필터링하여 해당하는 업소를 찾을 수 있는 컴포넌트 입니다.
  - StoresMap
    - kakao-map-sdk를 활용하여 착한 가격 업소 데이터와 Filter와 Search 컴포넌트에서 저장한 필터 정보로 사용자가 선택하거나 검색한 업소들을 지도에서 확인 할 수 있는 컴포넌트 입니다.
- Layout
  - Header.jsx
    - 로그인 상태에 따라 유저네임 표시 및 로그인/로그아웃 기능을 제공하는 헤더 컴포넌트입니다. 
  - Layout.jsx
    - Header를 렌더링하고 Outlet을 통해 자식 라우트를 표시합니다.   
- Login
- Modal
  - ModalBase.jsx
    - styled-components를 사용하여 모달 창 컴포넌트를 구현하는 컴포넌트입니다.
  - ReviewModal.jsx
      - react-query를 사용하여 리뷰 데이터를 조회하고, 수정 및 삭제 기능을 제공하는 모달 컴포넌트를 구현하는 컴포넌트입니다.
- ReviewCreate
  - PostModal.jsx
    - 리뷰 작성하기 버튼을 클릭 했을 때, 모달 창으로 리뷰를 작성할 수 있는 창이 뜨는 컴포넌트 입니다.
- SignUp

### 📂hooks

- useJejuStore.js
  - 제주시 착한 가격 업소 데이터를 호출하여 zustand의 초기값으로 설정합니다.
- useSearch.js
  - 검색어를 관리하고 적용하는 훅입니다.

### 📂pages

- Detail.jsx
  - 제주도 가게의 상세 정보를 표시하고, 리뷰 작성 모달을 관리하는 상세 페이지 컴포넌트입니다.
- Home.jsx
  - HomePage를 보여주며 필터, 검색, 지도 컴포넌트로 이루어져 있습니다.
- Login.jsx
  - 등록한 계정으로 로그인이 가능한 컴포넌트 입니다.
- SignUp.jsx
  - 이메일과 비밀번호, 닉네임으로 회원가입이 가능한 컴포넌트 입니다.

### 📂supabase

- supabase.js

### 📂zustand

- filter.store.js
  - Filter 컴포넌트에서 업종의 체크박스를 해제할 때 addFilter 함수를 호출하여 typeFilters에 삽압히고, 업종의 체크박스를 체크할 때 delFilter 함수를 호출하여 typeFilters에서 제거합니다.
  - 가격대를 선택할 때에는 setPriceFilter를 호출하여 priceFilter의 값을 변경합니다.
- filteredjeju.store.js
  - initJejuStores 함수를 호출하여 제주시 착한 가격 업소 데이터를 전처리하고 jejuStores에 저장합니다.
- SearchStore.js
  - input 칸에 입력되고있는 검색어 상태를 관리합니다.
-  user.store.js
  - 유저의 정보를 전역상태로 관리합니다.


<br />


## 🔗 링크

### [✨ TEAM NOTION](https://teamsparta.notion.site/B3-582a9e70508f4dae82497db169d4d019)

### [✨ FIGMA](https://www.figma.com/file/9WbfzmAaMbv405kkS5VODc?embed_host=notion&kind=file&node-id=0-1&t=3q2NLHBLGuuIFM99-0&viewer=1)

<br />

