// src/data/MovieData.ts
export interface Movie {
    id: number | string;
    title: string;
    subTitle: string;
    direc: string;
    rel: string;
    img: string;
    className: string;
    desc: string;
    runtime: string;
    keywords: string[];
    category?: string[];
}

export const allMovies: Movie[] = [
    { 
        id: 1, title: "Dune", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Denis Villeneuve", rel: "2021", runtime: "2h 35m",
        img: "/media/dune2.jpg", className: "cu1_set1",
        desc: "적막한 대기 속에 감도는 압도적 무게감과 고독을 포착한다. 행성 아라키스로 떠난 소년 폴은 자신의 운명과 선택 앞에 서게 된다.",
        keywords: ["사막의 미학", "운명의 여정", "정적의 규모"]
    },
    // Curation_3용 데이터
    { 
        id: 2, title: "Gravity", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Alfonso Cuarón", rel: "2013", runtime: "1h 31m",
        img: "/media/gravity.jpg", className: "cu3_set2",
        desc: "광활한 우주에서 느끼는 절대적 고독과 생존을 향한 강렬한 의지. 압도적인 사운드와 비주얼이 만드는 경외감.",
        keywords: ["우주적 고독", "생존의 중력", "시각적 경외"]
    },
    { 
        id: 3, title: "Blade Runner 2049", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Denis Villeneuve", rel: "2017", runtime: "2h 44m",
        img: "/media/blade_runner_2049.jpg", className: "cu3_set3",
        desc: "안개와 조명이 빚어낸 디스토피아의 미학. 인간성의 본질에 대한 묵직한 질문과 탐미적인 미장센.",
        keywords: ["디스토피아", "인간의 본질", "미학적 탐구"]
    },
    { 
        id: 4, title: "Interstellar", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Christopher Nolan", rel: "2014", runtime: "2h 49m",
        img: "/media/interstellar2.jpg", className: "cu3_set4",
        desc: "차원을 넘나드는 시간과 사랑의 물리학. 장엄한 우주 대서사시 속에 녹아든 부성애와 인류의 희망.",
        keywords: ["시간의 상대성", "우주 대서사", "인류의 도약"]
    },
    { 
        id: 5, title: "TENET", subTitle: "과거를 바꾸지 말고 시간을 되돌려라",
        direc: "Christopher Nolan", rel: "2020", runtime: "2h 30m",
        img: "/media/tenet.jpg", className: "cu3_set5",
        desc: "시간의 흐름을 뒤집는 인버전. 제3차 세계대전을 막기 위해 현재와 미래가 교차하는 전쟁에 뛰어든다.",
        keywords: ["인버전", "물리학적 상상", "시각적 혁명"]
    },
    { 
        id: 6, title: "Arrival", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Denis Villeneuve", rel: "2016", runtime: "1h 56m",
        img: "/media/blade_runner_2049.jpg", className: "cu3_set6",
        desc: "언어와 시간이 만나는 경이로운 순간. 외계 지성체와의 조우를 통해 바라본 삶과 운명에 대한 수용.",
        keywords: ["언어적 소통", "시간의 원형", "운명적 수용"]
    },
    { 
        id: 7, title: "Mad Max : Fury Road", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "George Miller", rel: "2015", runtime: "2h 0m",
        img: "/media/mad_max.jpg", className: "cu3_set7",
        desc: "아날로그 액션의 정수. 붉은 사막 위를 질주하는 광기와 해방의 아드레날린.",
        keywords: ["아날로그 액션", "질주하는 광기", "사막의 해방"]
    },
    { 
        id: 8, title: "Dunkirk", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Christopher Nolan", rel: "2017", runtime: "1h 46m",
        img: "/media/blade_runner_2049.jpg", className: "cu3_set8",
        desc: "해변, 바다, 하늘에서 펼쳐지는 생존의 시간. 대사 없이도 느껴지는 긴박함과 전쟁의 공포.",
        keywords: ["생존의 시간", "청각적 긴장", "전쟁의 잔상"]
    },
    { 
        id: 9, title: "1917", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Sam Mendes", rel: "2019", runtime: "1h 59m",
        img: "/media/1917.jpg", className: "cu3_set9",
        desc: "단 한 순간도 멈추지 않는 원 컨티뉴어스 숏. 전쟁터의 한복판을 통과하는 듯한 생생한 몰입감.",
        keywords: ["몰입의 극치", "원 컨티뉴어스 숏", "전쟁의 긴박함"]
    },
    { 
        id: 10, title: "Whiplash", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Damien Chazelle", rel: "2014", runtime: "1h 46m",
        img: "/media/whiplash.jpg", className: "cu3_set10",
        desc: "열망과 광기가 충돌하는 완벽한 리듬. 한계를 넘어선 집착이 빚어낸 전율의 피날레.",
        keywords: ["광기어린 열망", "전율의 리듬", "집착의 끝"]
    },
    { 
        id: 11, title: "Project Hail Mary", subTitle: "인류를 구하기 위한 외로운 우주 비행",
        direc: "Phil Lord, Christopher Miller", rel: "2026", runtime: "2h 36m",
        img: "/media/hailmary.png", className: "ex_set11",
        desc: "지구의 멸망을 막기 위해 홀로 깨어난 과학자. 기억을 되찾으며 벌이는 우주적 사투.",
        keywords: ["우주 과학", "기억의 조각", "인류의 구원"],
        category: ["top 5", "new"]
    },
    { 
        id: 12, title: "The Martian", subTitle: "어떤 일이 있어도 살아남아야 한다",
        direc: "Ridley Scott", rel: "2015", runtime: "2h 24m",
        img: "/media/martian.jpg", className: "ex_set12",
        desc: "화성에 홀로 남겨진 마크 와트니. 과학적 지식과 유머로 무장한 사상 초유의 화성 탈출기.",
        keywords: ["화성 생존", "긍정의 힘", "과학적 추론"],
        category: ["like", "view"]
    },
    { 
        id: 13, title: "007 Spectre", subTitle: "베일에 싸인 조직 스펙터와 마주하다",
        direc: "Sam Mendes", rel: "2015", runtime: "2h 28m",
        img: "/media/007.jpg", className: "ex_set13",
        desc: "제임스 본드에게 배달된 암호문. 그 뒤에 숨겨진 거대 조직 스펙터의 실체를 밝히기 위한 여정.",
        keywords: ["첩보 액션", "클래식의 부활", "스펙터"],
        category: ["view"]
    },
    { 
        id: 14, title: "The Grand Budapest Hotel", subTitle: "환상적인 색채 속에 감춰진 미스터리",
        direc: "Wes Anderson", rel: "2014", runtime: "1h 40m",
        img: "/media/budapest.jpg", className: "ex_set14",
        desc: "세계 최고의 호텔 컨시어지와 로비 보이. 그들이 겪는 기상천외한 모험과 미스터리.",
        keywords: ["탐미적 색채", "대칭의 미학", "기발한 서사"],
        category: ["like"]
    },
    { 
        id: 15, title: "The French Dispatch", subTitle: "마지막 호를 장식할 찬란한 이야기들",
        direc: "Wes Anderson", rel: "2021", runtime: "1h 48m",
        img: "/media/french_1.png", className: "ex_set15",
        desc: "20세기 프랑스 도시의 가상 잡지사. 개성 넘치는 기자들이 전하는 세 가지 특별한 기사들.",
        keywords: ["잡지 미학", "웨스 앤더슨", "예술적 아카이브"],
        category: ["like"]
    },
    { 
        id: 16, title: "Paddington", subTitle: "런던에 도착한 아주 특별한 꼬마 곰",
        direc: "Paul King", rel: "2014", runtime: "1h 35m",
        img: "/media/london.jpg", className: "ex_set16",
        desc: "새로운 가족을 찾아 런던으로 온 패딩턴. 실수투성이지만 사랑스러운 그의 좌충우돌 적응기.",
        keywords: ["따뜻한 감동", "가족의 의미", "런던 모험"],
        category: ["view"]
    },
    { 
        id: 17, title: "Escape Room", subTitle: "살아남기 위해선 정답을 찾아야 한다",
        direc: "Adam Robitel", rel: "2019", runtime: "1h 40m",
        img: "/media/escaperoom.jpg", className: "ex_set17",
        desc: "거액의 상금을 위해 모인 사람들. 목숨을 건 탈출 게임이 시작되고 본능이 드러나기 시작한다.",
        keywords: ["극한의 긴장", "퍼즐 게임", "심리적 사투"],
        category: ["like", "view"]
    }
];

