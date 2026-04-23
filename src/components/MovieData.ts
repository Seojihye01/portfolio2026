// src/data/MovieData.ts

export interface Movie {
    id: number | string;
    title: string;
    subTitle: string;
    direc: string;      // 감독
    rel: string;        // 개봉 연도
    img: string;        // 포스터 이미지
    className: string;  // 기존 레이아웃용 클래스명
    desc: string;       // 짧은 요약 (카드용)
    synopsis: string;   // 상세 줄거리 (모달용)
    runtime: string;    // 상영 시간
    keywords: string[]; // 태그
    actors: string[];   // 출연 배우
    trailerUrl: string; // YouTube Embed 링크
    videoUrl?: string;
    relatedMovies: number[]; // 관련 영화 ID 배열
    category?: string[];
    genre: "Sci-Fi" | "Drama" | "Action" | "Thriller" | "Fantasy" | "History" | "Animation" | "Comedy" | "Documentary" | "Romance" | "Noir" | "Arthouse" | "Classic" | "Independent";
}

export const allMovies: Movie[] = [
    { 
        id: 1, title: "Dune", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Denis Villeneuve", rel: "2021", runtime: "2h 35m",
        img: "/media/dune2.jpg", className: "cu1_set1",
        desc: "적막한 대기 속에 감도는 압도적 무게감과 고독을 포착한다.",
        synopsis: "우주에서 가장 귀한 자원인 스파이스를 둘러싼 가문 간의 전쟁, 그리고 그 속에서 각성하는 폴 아트레이데스의 여정을 그린 SF 대서사시입니다.",
        keywords: ["사막의 미학", "운명의 여정", "정적의 규모"],
        actors: ["Timothée Chalamet", "Rebecca Ferguson"],
        trailerUrl: "https://www.youtube.com/embed/n9xhJrPXop4",
        videoUrl: "/media/Dune.mp4",
        relatedMovies: [3, 6, 12],
        genre: "Sci-Fi"
    },
    { 
        id: 2, title: "Gravity", subTitle: "광활한 우주 속 절대적 고독",
        direc: "Alfonso Cuarón", rel: "2013", runtime: "1h 31m",
        img: "/media/gravity.jpg", className: "cu3_set2",
        desc: "광활한 우주에서 느끼는 생존을 향한 강렬한 의지.",
        synopsis: "폭파된 위성 잔해와 충돌하며 우주 한복판에 홀로 남겨진 라이언 스톤 박사가 지구로 돌아가기 위해 벌이는 극한의 사투를 담았습니다.",
        keywords: ["우주적 고독", "생존의 중력", "시각적 경외"],
        actors: ["Sandra Bullock", "George Clooney"],
        trailerUrl: "https://www.youtube.com/embed/OiTiKOy5Pqn",
        relatedMovies: [4, 12, 11],
        genre: "Sci-Fi"
    },
    { 
        id: 3, title: "Blade Runner 2049", subTitle: "안개와 조명이 빚어낸 디스토피아",
        direc: "Denis Villeneuve", rel: "2017", runtime: "2h 44m",
        img: "/media/blade_runner_2049.jpg", className: "cu3_set3",
        desc: "인간성의 본질에 대한 묵직한 질문과 탐미적인 미장센.",
        synopsis: "인간과 복제인간이 혼재된 2049년, 새로운 블레이드 러너 'K'가 오랫동안 숨겨져 있던 비밀을 발견하며 전설적인 데커드를 찾아 나섭니다.",
        keywords: ["디스토피아", "인간의 본질", "미학적 탐구"],
        actors: ["Ryan Gosling", "Harrison Ford"],
        trailerUrl: "https://www.youtube.com/embed/gCcx85zbxz4",
        relatedMovies: [1, 6, 5],
        genre: "Sci-Fi"
    },
    { 
        id: 4, title: "Interstellar", subTitle: "차원을 넘나드는 시간과 사랑의 물리학",
        direc: "Christopher Nolan", rel: "2014", runtime: "2h 49m",
        img: "/media/interstellar2.jpg", className: "cu3_set4",
        desc: "장엄한 우주 대서사시 속에 녹아든 인류의 희망.",
        synopsis: "붕괴하는 지구를 대신할 새로운 거주지를 찾기 위해 시공간의 한계를 넘어 블랙홀 너머로 떠나는 탐사대원들의 장엄한 기록입니다.",
        keywords: ["시간의 상대성", "우주 대서사", "인류의 도약"],
        actors: ["Matthew McConaughey", "Anne Hathaway"],
        trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
        relatedMovies: [2, 5, 12],
        genre: "Sci-Fi"
    },
    { 
        id: 5, title: "TENET", subTitle: "과거를 바꾸지 말고 시간을 되돌려라",
        direc: "Christopher Nolan", rel: "2020", runtime: "2h 30m",
        img: "/media/tenet.jpg", className: "cu3_set5",
        desc: "시간의 흐름을 뒤집는 인버전. 제3차 세계대전을 막기 위한 사투.",
        synopsis: "시간을 거스르는 '인버전' 기술을 통해 미래 세력이 현재를 공격합니다. 주도자는 작전의 실체를 파악하며 시공간을 넘나드는 전쟁에 뛰어듭니다.",
        keywords: ["인버전", "물리학적 상상", "시각적 혁명"],
        actors: ["John David Washington", "Robert Pattinson"],
        trailerUrl: "https://www.youtube.com/embed/LdOM0x0ASFE",
        relatedMovies: [4, 8, 3],
        genre: "Sci-Fi"
    },
    { 
        id: 6, title: "Arrival", subTitle: "언어와 시간이 만나는 경이로운 순간",
        direc: "Denis Villeneuve", rel: "2016", runtime: "1h 56m",
        img: "/media/blade_runner_2049.jpg", className: "cu3_set6",
        desc: "외계 지성체와의 조우를 통해 바라본 삶과 운명.",
        synopsis: "어느 날 갑자기 찾아온 12개의 외계 비행체. 언어학자 루이스는 그들이 보내는 수수께끼 같은 메시지를 해석하며 자신의 미래를 보게 됩니다.",
        keywords: ["언어적 소통", "시간의 원형", "운명적 수용"],
        actors: ["Amy Adams", "Jeremy Renner"],
        trailerUrl: "https://www.youtube.com/embed/tFMo3UJ4B4g",
        relatedMovies: [1, 3, 12],
        genre: "Sci-Fi"
    },
    { 
        id: 7, title: "Mad Max : Fury Road", subTitle: "붉은 사막 위를 질주하는 광기",
        direc: "George Miller", rel: "2015", runtime: "2h 0m",
        img: "/media/mad_max.jpg", className: "cu3_set7",
        desc: "아날로그 액션의 정수. 사막의 해방과 아드레날린.",
        synopsis: "핵전쟁으로 멸망한 22세기. 독재자 임모탄에 맞서 진정한 자유를 찾기 위해 분노의 도로를 질주하는 맥스와 퓨리오사의 사투입니다.",
        keywords: ["아날로그 액션", "질주하는 광기", "사막의 해방"],
        actors: ["Tom Hardy", "Charlize Theron"],
        trailerUrl: "https://www.youtube.com/embed/hEJnMQG9ev8",
        relatedMovies: [1, 17, 9],
        genre: "Action"
    },
    { 
        id: 8, title: "Dunkirk", subTitle: "생존의 시간이 빚어낸 긴박함",
        direc: "Christopher Nolan", rel: "2017", runtime: "1h 46m",
        img: "/media/blade_runner_2049.jpg", className: "cu3_set8",
        desc: "해변, 바다, 하늘에서 펼쳐지는 경이로운 탈출 작전.",
        synopsis: "제2차 세계대전 당시 됭케르크 해안에 고립된 40만 명의 연합군을 탈출시키기 위해 벌였던 기적 같은 작전을 세 가지 시선으로 보여줍니다.",
        keywords: ["생존의 시간", "청각적 긴장", "전쟁의 잔상"],
        actors: ["Fionn Whitehead", "Tom Hardy"],
        trailerUrl: "https://www.youtube.com/embed/F-eMt3SrfFU",
        relatedMovies: [5, 9, 4],
        genre: "History"
    },
    { 
        id: 9, title: "1917", subTitle: "멈추지 않는 긴장, 원 컨티뉴어스 숏",
        direc: "Sam Mendes", rel: "2019", runtime: "1h 59m",
        img: "/media/1917.jpg", className: "cu3_set9",
        desc: "전쟁터의 한복판을 통과하는 듯한 생생한 몰입감.",
        synopsis: "제1차 세계대전이 한창인 어느 날, 두 명의 병사가 적진을 뚫고 아군에게 공격 중지 명령을 전달하기 위해 벌이는 경이로운 사투를 그립니다.",
        keywords: ["몰입의 극치", "원 컨티뉴어스 숏", "전쟁의 긴박함"],
        actors: ["George MacKay", "Dean-Charles Chapman"],
        trailerUrl: "https://www.youtube.com/embed/YqNYrYUiMfg",
        relatedMovies: [8, 7, 5],
        genre: "History"
    },
    { 
        id: 10, title: "Whiplash", subTitle: "열망과 광기가 충돌하는 완벽한 리듬",
        direc: "Damien Chazelle", rel: "2014", runtime: "1h 46m",
        img: "/media/whiplash.jpg", className: "cu3_set10",
        desc: "한계를 넘어선 집착이 빚어낸 전율의 피날레.",
        synopsis: "최고의 드러머가 되고 싶은 신입생 앤드류와 그의 한계를 끌어내기 위해 폭언을 서슴지 않는 플레처 교수의 숨 막히는 대결과 광기를 다룹니다.",
        keywords: ["광기어린 열망", "전율의 리듬", "집착의 끝"],
        actors: ["Miles Teller", "J.K. Simmons"],
        trailerUrl: "https://www.youtube.com/embed/7d_jwgPjTzE",
        relatedMovies: [14, 15, 3],
        genre: "Drama"
    },
    { 
        id: 11, title: "Project Hail Mary", subTitle: "인류를 구하기 위한 외로운 우주 비행",
        direc: "Phil Lord, Christopher Miller", rel: "2026", runtime: "2h 36m",
        img: "/media/hailmary.png", className: "ex_set11",
        desc: "홀로 깨어난 과학자. 기억을 되찾으며 벌이는 우주적 사투.",
        synopsis: "기억을 잃은 채 태양계 바깥의 우주선에서 깨어난 라일랜드 그레이스. 그는 서서히 기억을 되찾으며 지구가 멸망 위기에 처했음을 깨닫습니다.",
        keywords: ["우주 과학", "기억의 조각", "인류의 구원"],
        actors: ["Ryan Gosling"],
        trailerUrl: "https://www.youtube.com/embed/EXAMPLE_ID",
        relatedMovies: [12, 2, 4],
        category: ["top 5", "new"],
        genre: "Sci-Fi"
    },
    { 
        id: 12, title: "The Martian", subTitle: "어떤 일이 있어도 살아남아야 한다",
        direc: "Ridley Scott", rel: "2015", runtime: "2h 24m",
        img: "/media/martian.jpg", className: "ex_set12",
        desc: "화성에 홀로 남겨진 마크 와트니의 기발한 탈출기.",
        synopsis: "팀원들과 떨어져 화성에 홀로 남게 된 마크 와트니. 남겨진 식량과 자신의 지식을 동원해 다음 탐사대가 올 때까지 버티기로 결심합니다.",
        keywords: ["화성 생존", "긍정의 힘", "과학적 추론"],
        actors: ["Matt Damon", "Jessica Chastain"],
        trailerUrl: "https://www.youtube.com/embed/ej3ioOneTy8",
        relatedMovies: [2, 4, 11],
        category: ["like", "view"],
        genre: "Sci-Fi"
    },
    { 
        id: 13, title: "007 Spectre", subTitle: "거대 조직 스펙터와 제임스 본드의 대결",
        direc: "Sam Mendes", rel: "2015", runtime: "2h 28m",
        img: "/media/007.jpg", className: "ex_set13",
        desc: "베일에 싸인 조직 스펙터의 실체를 밝히기 위한 여정.",
        synopsis: "본드는 멕시코시티에서 일어난 폭발 사고 후 과거의 비밀과 얽힌 거대 조직 스펙터의 존재를 발견하고 이를 추적하기 시작합니다.",
        keywords: ["첩보 액션", "클래식의 부활", "스펙터"],
        actors: ["Daniel Craig", "Léa Seydoux"],
        trailerUrl: "https://www.youtube.com/embed/7GqClq9Zs9E",
        relatedMovies: [5, 17, 7],
        category: ["view"],
        genre: "Action"
    },
    { 
        id: 14, title: "The Grand Budapest Hotel", subTitle: "환상적인 색채 속에 감춰진 미스터리",
        direc: "Wes Anderson", rel: "2014", runtime: "1h 40m",
        img: "/media/budapest.jpg", className: "ex_set14",
        desc: "최고의 컨시어지와 로비 보이의 기상천외한 모험.",
        synopsis: "세계 최고의 호텔 컨시어지 구스타브와 그의 충실한 로비 보이 제로. 명화 도난 사건에 휘말리며 벌어지는 미스터리한 소동극입니다.",
        keywords: ["탐미적 색채", "대칭의 미학", "기발한 서사"],
        actors: ["Ralph Fiennes", "Tony Revolori"],
        trailerUrl: "https://www.youtube.com/embed/1Fg5iWmQjwk",
        relatedMovies: [15, 10, 16],
        category: ["like"],
        genre: "Comedy"
    },
    { 
        id: 15, title: "The French Dispatch", subTitle: "찬란하게 빛나는 마지막 호의 기사들",
        direc: "Wes Anderson", rel: "2021", runtime: "1h 48m",
        img: "/media/french_1.png", className: "ex_set15",
        desc: "가상 잡지사 프렌치 디스패치의 세 가지 특별한 기사.",
        synopsis: "편집장의 죽음을 맞아 그의 유언대로 잡지의 마지막 호를 장식할 세 가지 매혹적인 기사를 화려한 미장센으로 엮어냈습니다.",
        keywords: ["잡지 미학", "웨스 앤더슨", "예술적 아카이브"],
        actors: ["Bill Murray", "Tilda Swinton"],
        trailerUrl: "https://www.youtube.com/embed/TcPk2p0Zaw4",
        relatedMovies: [14, 16, 10],
        category: ["like"],
        genre: "Drama"
    },
    { 
        id: 16, title: "Paddington", subTitle: "런던에 도착한 사랑스러운 꼬마 곰",
        direc: "Paul King", rel: "2014", runtime: "1h 35m",
        img: "/media/london.jpg", className: "ex_set16",
        desc: "실수투성이지만 거부할 수 없는 패딩턴의 적응기.",
        synopsis: "새로운 가족을 찾아 페루에서 영국 런던으로 온 꼬마 곰 패딩턴. 브라운 가족을 만나며 진정한 집의 의미를 찾아가는 따뜻한 이야기입니다.",
        keywords: ["따뜻한 감동", "가족의 의미", "런던 모험"],
        actors: ["Ben Whishaw", "Hugh Bonneville"],
        trailerUrl: "https://www.youtube.com/embed/7bZFr2IA0Bo",
        relatedMovies: [14, 15, 12],
        category: ["view"], 
        genre: "Animation"
    },
    { 
        id: 17, title: "Escape Room", subTitle: "살아남기 위해선 정답을 찾아야 한다",
        direc: "Adam Robitel", rel: "2019", runtime: "1h 40m",
        img: "/media/escaperoom.jpg", className: "ex_set17",
        desc: "거액의 상금을 건 탈출 게임. 본능이 드러나는 사투.",
        synopsis: "초대장을 받은 6명의 사람들. 목숨을 건 거대한 방 탈출 게임이 시작되고, 각 방의 수수께끼를 풀지 못하면 죽음뿐인 상황이 반복됩니다.",
        keywords: ["극한의 긴장", "퍼즐 게임", "심리적 사투"],
        actors: ["Taylor Russell", "Logan Miller"],
        trailerUrl: "https://www.youtube.com/embed/69idS_p4Fsk",
        relatedMovies: [13, 7, 9],
        category: ["like", "view"],
        genre: "Thriller"
    }
];