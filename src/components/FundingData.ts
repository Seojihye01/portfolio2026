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
  image: string;
  summary: string;
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
    image: "/media/camera.jpg",
    summary: "복잡한 도시 서울, 카메라에 담긴 기록."
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
    summary: "마지막 겨울을 기록하는 두 직장인의 밤."
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
    image: "/media/camera.jpg",
    summary: "아무도 듣지 못하는 우주의 소리를 쫓는 탐사선 이야기."
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
    image: "/media/camera.jpg",
    summary: "계절이 바뀌기 전, 우리가 나누었던 마지막 약속."
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
    image: "/media/camera.jpg",
    summary: "꽃이 없는 계절에 피어난 무형의 이미지들."
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
    image: "/media/camera.jpg",
    summary: "데이터의 바다 속에서 자의식을 갖게 된 프로그램의 여정."
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
    image: "/media/camera.jpg",
    summary: "해 질 녘 편의점 앞에서 시작된 낯선 이들의 대화."
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
    image: "/media/camera.jpg",
    summary: "서른을 앞둔 평범한 우리들의 뜨겁고도 차가운 우정."
  }
];