# Bridgeway Bible Institute

> 말씀으로 세워가는 믿음의 여정

Bridgeway Bible Institute(BBI)는 교회 성경공부 교재 및 관리를 위한 웹사이트입니다. [Docusaurus 3](https://docusaurus.io/)로 제작되었습니다.

## 웹사이트 주소

https://smlee729.github.io/bbi/

## 성경공부 과정

- 📖 **창세기 강해** - 창세기 1장-50장 강해
- ✝️ **신약개론** - 신약성경 27권 개론
- ⛪ **기초교리** - 기독교 핵심 교리 학습
- 🙏 **제자훈련** - 신앙 훈련 과정

## 로컬 개발

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm start
```

브라우저에서 http://localhost:3000/bbi/ 로 접속합니다.

### 빌드

```bash
npm run build
```

정적 파일이 `build` 디렉토리에 생성됩니다.

### 빌드 테스트

```bash
npm run serve
```

## 배포

main 브랜치에 push하면 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

## 프로젝트 구조

```
bbi/
├── docs/                    # 메인 문서 (소개)
├── genesis/                 # 창세기 강해
├── nt-intro/                # 신약개론
├── basic-doctrine/          # 기초교리
├── discipleship/            # 제자훈련
├── sidebars/                # 각 카테고리별 사이드바 설정
├── src/
│   ├── css/custom.css       # 커스텀 테마
│   └── pages/index.tsx      # 홈페이지
├── static/img/              # 이미지 자산
└── docusaurus.config.ts     # 메인 설정
```

## 새 문서 추가하기

각 카테고리 폴더에 `.md` 파일을 추가하면 자동으로 사이드바에 표시됩니다.

```markdown
---
sidebar_position: 3
---

# 문서 제목

내용...
```

## 라이선스

Copyright © 2024 Bridgeway Bible Institute
