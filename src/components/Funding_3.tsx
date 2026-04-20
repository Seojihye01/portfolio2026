import React, { useState, useMemo } from 'react';
import { fundingProjects, type FundingProject } from './FundingData'; 
import './Funding_3.css';

const CATEGORIES = ["All", "Drama", "Romance", "Experimental", "Sci-Fi / Fantasy", "Documentary", "ETC"];
const STATUS_TABS: { label: string; value: FundingProject['progressState'] }[] = [
  { label: "Dev", value: "Dev" },
  { label: "Prod", value: "Prod" },
  { label: "Post", value: "Post" },
  { label: "Ready", value: "Ready" }
];

const Funding_3 = () => {
  const [activeTab, setActiveTab] = useState<FundingProject['progressState']>("Post");
  const [activeCategory, setActiveCategory] = useState("All");

  const displayProjects = useMemo(() => {
    let filtered = fundingProjects.filter(project => project.progressState === activeTab);
    if (activeCategory !== "All") {
      filtered = filtered.filter(project => project.genre === activeCategory);
    }
    // 데이터 복제 (충분히 많아 보이게)
    return [...filtered, ...filtered, ...filtered].map((p, index) => ({
      ...p,
      uniqueId: `${p.id}-${index}`
    }));
  }, [activeTab, activeCategory]);

  return (
    // 💡 테마 클래스를 여기에 부여해서 전체 색상을 제어합니다.
    <section className={`funding_list_section theme_${activeTab}`}>
      {/* 💡 글래스모피즘을 위한 배경 blur 오버레이 (선택사항) */}
      <div className="section_background" />

      <div className="funding_container">
        
        {/* 상단 탭 스테이지 (글래스모피즘 적용) */}
        <div className="status_tab_container">
          <div className="status_tab_track glass_morph">
            {STATUS_TABS.map((tab) => (
              <button 
                key={tab.value} 
                className={`tab_btn ${activeTab === tab.value ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
            <div className={`tab_indicator pos_${activeTab}`} />
          </div>
        </div>

        {/* 카테고리 필터 */}
        <nav className="category_nav">
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className={`cat_btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* 카드 그리드 */}
        <div className="funding_grid">
          {displayProjects.map((project: any) => (
            <a href={`/funding/${project.id}`} key={project.uniqueId} className="funding_card_link">
              {/* 💡 카드에도 글래스모피즘 적용 */}
              <div className="funding_card glass_morph">
                <div className="card_img_box">
                  <img src={project.image} alt={project.title} />
                  <div className="more_overlay"><span>+ MORE</span></div>
                </div>
                
                <div className="card_content">
                  <div className="card_header">
                    <div>
                      <h3>{project.title}</h3>
                      <span className="genre_label">{project.genre}</span>
                    </div>
                    <span className="achievement_tag">{project.achievedRate}% achieved</span>
                  </div>

                  <div className="card_info_list">
                    <div className="info_row"><span>Remaining</span><div className="dot_line" /><span>{project.remainingDays} days left</span></div>
                    <div className="info_row"><span>Funded</span><div className="dot_line" /><span>{project.fundedPrice}</span></div>
                    <div className="info_row"><span>Progress</span><div className="dot_line" /><span>{project.progressState}</span></div>
                    <div className="info_row"><span>Status</span><div className="dot_line" /><span>{project.status}</span></div>
                  </div>
                </div>
              </div>
            </a>
          ))}
          {displayProjects.length < 6 && (
            <div className="funding_card placeholder_card">
              <div className="placeholder_inner">
                <p>Pending</p>
                <span>새로운 프로젝트를 준비 중입니다</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Funding_3;