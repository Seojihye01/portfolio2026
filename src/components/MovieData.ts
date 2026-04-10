// src/data/MovieData.ts
export interface Movie {
    id: number;
    title: string;
    subTitle: string;
    direc: string;
    rel: string;
    img: string;
    className: string;
    desc: string;
    runtime: string;
    keywords: string[];
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
        id: 5, title: "Children of Men", subTitle: "사막의 지평선과 거대한 함선이 만드는 압도적 대비",
        direc: "Alfonso Cuarón", rel: "2006", runtime: "1h 49m",
        img: "/media/gravity.jpg", className: "cu3_set5",
        desc: "희망이 사라진 시대에 찾아온 기적. 롱테이크로 담아낸 처절한 현실과 숭고한 생명의 가치.",
        keywords: ["처절한 리얼리티", "생명의 숭고함", "롱테이크 미학"]
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
    }


];

