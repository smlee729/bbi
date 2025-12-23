import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type CourseItem = {
  title: string;
  icon: string;
  description: string;
  link: string;
};

const courseList: CourseItem[] = [
  {
    title: '창세기 강해',
    icon: '📖',
    description: '태초의 말씀부터 이스라엘의 시작까지, 창세기 50장을 통해 하나님의 창조와 구원의 역사를 배웁니다.',
    link: '/genesis/intro',
  },
  {
    title: '신약개론',
    icon: '✝️',
    description: '신약성경 27권의 배경, 저자, 주제를 살펴보며 예수 그리스도의 복음과 초대교회의 역사를 이해합니다.',
    link: '/nt-intro/intro',
  },
  {
    title: '기초교리',
    icon: '⛪',
    description: '기독교의 핵심 교리인 삼위일체, 구원론, 교회론 등을 체계적으로 학습하여 신앙의 기초를 다집니다.',
    link: '/basic-doctrine/intro',
  },
  {
    title: '제자훈련',
    icon: '🙏',
    description: '예수님의 제자로서의 삶을 실천하기 위한 신앙 훈련 과정입니다. 기도, 말씀, 전도를 배웁니다.',
    link: '/discipleship/intro',
  },
];

function CourseCard({title, icon, description, link}: CourseItem) {
  return (
    <div className="col col--6">
      <Link to={link} className={styles.courseCardLink}>
        <div className={styles.courseCard}>
          <div className={styles.courseIcon}>{icon}</div>
          <Heading as="h3" className={styles.courseTitle}>
            {title}
          </Heading>
          <p className={styles.courseDescription}>{description}</p>
          <span className={styles.courseArrow}>시작하기 →</span>
        </div>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.heroVerse}>
          <blockquote>
            "주의 말씀은 내 발에 등이요 내 길에 빛이니이다"
            <cite>— 시편 119:105</cite>
          </blockquote>
        </div>
      </div>
    </header>
  );
}

function CoursesSection() {
  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">성경공부 과정</Heading>
          <p>믿음의 성장을 위한 체계적인 학습 과정을 제공합니다</p>
        </div>
        <div className="row">
          {courseList.map((props, idx) => (
            <CourseCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Bridgeway Bible Institute 소개</Heading>
            <p>
              Bridgeway Bible Institute(BBI)는 성경 말씀을 통해
              믿음의 다리를 놓는 것을 목표로 합니다.
            </p>
            <p>
              체계적인 성경공부 커리큘럼을 통해 하나님의 말씀을 깊이 이해하고,
              삶 속에서 실천할 수 있도록 돕습니다.
            </p>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              더 알아보기
            </Link>
          </div>
          <div className="col col--6">
            <div className={styles.aboutHighlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>4</span>
                <span className={styles.highlightLabel}>학습 과정</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>66</span>
                <span className={styles.highlightLabel}>성경 권수</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>∞</span>
                <span className={styles.highlightLabel}>말씀의 은혜</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="홈"
      description="Bridgeway Bible Institute - 말씀으로 세워가는 믿음의 여정">
      <HomepageHeader />
      <main>
        <CoursesSection />
        <AboutSection />
      </main>
    </Layout>
  );
}
