export interface FundingTier {
  id: number;
  name: string;
  price: string;
  benefit: string;
}

export interface FundingProject {
  id: number;
  title: string;
  genre: string;
  progressState: 'Dev' | 'Prod' | 'Post' | 'Ready'; 
  achievedRate: number;
  remainingDays: number;
  fundedPrice: string;
  status: 'Most Funded' | 'Closing Soon' | 'New' | 'None';
  supporters: number;
  moodTag: string[];
  shooting: string;
  releaseTarget: string;
  image: string; // 대표 썸네일
  images: string[]; // 슬라이더용 다중 이미지 (5장 이상)
  summary: string;
  synopsis: string;
  tiers?: FundingTier[];
}

export const fundingProjects: FundingProject[] = [
  {
    id: 1,
    title: "서울의 하루",
    genre: "Drama",
    progressState: "Prod",
    achievedRate: 457,
    remainingDays: 12,
    fundedPrice: "₩35,480,000",
    status: "Most Funded",
    supporters: 320,
    moodTag: ["Seoul", "Travel", "City", "Warm"],
    shooting: "May 2025",
    releaseTarget: "Autumn 2025",
    image: "/media/seoul_main.jpg",
    images: [
      "/media/seoul_1.jpg",
      "/media/seoul_2.jpg",
      "/media/seoul_3.jpg",
      "/media/seoul_4.jpg",
      "/media/seoul_5.jpg"
    ],
    summary: "복잡한 도시 서울, 카메라에 담긴 기록.",
    synopsis: "모두가 빠르게 흘러가는 서울의 중심에서, 시간의 흐름을 멈추고 싶어 하는 무명 사진작가 '민수'의 시선을 따라갑니다..."
  },
  {
    id: 2,
    title: "겨울의 끝에서",
    genre: "Documentary",
    progressState: "Post",
    achievedRate: 1005,
    remainingDays: 21,
    fundedPrice: "₩10,165,000",
    status: "Most Funded",
    supporters: 126,
    moodTag: ["Winter", "Night", "Quiet", "Workplace"],
    shooting: "July 2025",
    releaseTarget: "Winter 2026",
    image: "/media/camera.jpg",
    images: [
      "/media/camera.jpg",
      "/media/camera.jpg",
      "/media/camera.jpg",
      "/media/camera.jpg",
      "/media/camera.jpg"
    ],
    summary: "마지막 겨울을 기록하는 두 직장인의 밤.",
    synopsis: "정년퇴직을 한 달 앞둔 베테랑 엔지니어와 이제 막 입사한 신입 사원이 심야 교대 근무를 하며 나누는 대화를 담았습니다..."
  },
  {
    id: 3,
    title: "침묵의 궤도",
    genre: "Sci-Fi / Fantasy",
    progressState: "Dev",
    achievedRate: 185,
    remainingDays: 45,
    fundedPrice: "₩2,100,000",
    status: "New",
    supporters: 88,
    moodTag: ["Space", "Silent", "Mystery"],
    shooting: "January 2026",
    releaseTarget: "Summer 2027",
    image: "/media/space_main.jpg",
    images: [
      "/media/space_1.jpg",
      "/media/space_2.jpg",
      "/media/space_3.jpg",
      "/media/space_4.jpg",
      "/media/space_5.jpg"
    ],
    summary: "아무도 듣지 못하는 우주의 소리를 쫓는 탐사선 이야기.",
    synopsis: "서기 2142년, 지구와의 통신이 끊긴 지 10년이 지난 심우주 탐사선 '사일런스 호'..."
  },
  {
    id: 4,
    title: "여름의 마지막",
    genre: "Romance",
    progressState: "Ready",
    achievedRate: 277,
    remainingDays: 5,
    fundedPrice: "₩13,500,000",
    status: "Closing Soon",
    supporters: 154,
    moodTag: ["Summer", "Memory", "First Love"],
    shooting: "August 2024",
    releaseTarget: "May 2025",
    image: "/media/summer_main.jpg",
    images: [
      "/media/summer_1.jpg",
      "/media/summer_2.jpg",
      "/media/summer_3.jpg",
      "/media/summer_4.jpg",
      "/media/summer_5.jpg"
    ],
    summary: "계절이 바뀌기 전, 우리가 나누었던 마지막 약속.",
    synopsis: "고등학교 졸업 후 10년 만에 고향 마을에서 재회한 '준'과 '하은'..."
  },
  {
    id: 5,
    title: "무화",
    genre: "Experimental",
    progressState: "Post",
    achievedRate: 229,
    remainingDays: 14,
    fundedPrice: "₩4,210,000",
    status: "None",
    supporters: 92,
    moodTag: ["Abstract", "Red", "Fragment"],
    shooting: "November 2025",
    releaseTarget: "Spring 2026",
    image: "/media/abstract_main.jpg",
    images: [
      "/media/abstract_1.jpg",
      "/media/abstract_2.jpg",
      "/media/abstract_3.jpg",
      "/media/abstract_4.jpg",
      "/media/abstract_5.jpg"
    ],
    summary: "꽃이 없는 계절에 피어난 무형의 이미지들.",
    synopsis: "형태가 없는 감정을 시각화할 수 있을까? '무화(無花)'는 상실과 슬픔이라는 추상적인 개념을 시각화한 실험 영화입니다."
  },
  {
    id: 6,
    title: "VOID 0.1",
    genre: "Animation",
    progressState: "Dev",
    achievedRate: 113,
    remainingDays: 60,
    fundedPrice: "₩1,200,500",
    status: "New",
    supporters: 45,
    moodTag: ["Glitch", "Digital", "Future"],
    shooting: "June 2026",
    releaseTarget: "Winter 2027",
    image: "/media/void_main.jpg",
    images: [
      "/media/void_1.jpg",
      "/media/void_2.jpg",
      "/media/void_3.jpg",
      "/media/void_4.jpg",
      "/media/void_5.jpg"
    ],
    summary: "데이터의 바다 속에서 자의식을 갖게 된 프로그램의 여정.",
    synopsis: "버려진 서버실의 오류 코드들이 모여 만들어진 생명체 '보이드'..."
  },
  {
    id: 7,
    title: "낮과 밤 사이",
    genre: "Drama",
    progressState: "Prod",
    achievedRate: 101,
    remainingDays: 3,
    fundedPrice: "₩28,900,000",
    status: "Closing Soon",
    supporters: 210,
    moodTag: ["Blue Hour", "Conversation", "Dusk"],
    shooting: "March 2025",
    releaseTarget: "December 2025",
    image: "/media/dusk_main.jpg",
    images: [
      "/media/dusk_1.jpg",
      "/media/dusk_2.jpg",
      "/media/dusk_3.jpg",
      "/media/dusk_4.jpg",
      "/media/dusk_5.jpg"
    ],
    summary: "해 질 녘 편의점 앞에서 시작된 낯선 이들의 대화.",
    synopsis: "블루 아워(Blue Hour)라 불리는 찰나의 시간, 동네 편의점 야외 테이블에 우연히 합석하게 된 세 명의 이방인들..."
  },
  {
    id: 8,
    title: "스물아홉의 온도",
    genre: "Drama",
    progressState: "Ready",
    achievedRate: 303,
    remainingDays: 30,
    fundedPrice: "₩6,750,000",
    status: "Most Funded",
    supporters: 189,
    moodTag: ["Youth", "Realistic", "Spring"],
    shooting: "April 2024",
    releaseTarget: "January 2025",
    image: "/media/youth_main.jpg",
    images: [
      "/media/youth_1.jpg",
      "/media/youth_2.jpg",
      "/media/youth_3.jpg",
      "/media/youth_4.jpg",
      "/media/youth_5.jpg"
    ],
    summary: "서른을 앞둔 평범한 우리들의 뜨겁고도 차가운 우정.",
    synopsis: "꿈과 현실 사이에서 가장 치열하게 흔들리는 나이, 스물아홉..."
  }
];