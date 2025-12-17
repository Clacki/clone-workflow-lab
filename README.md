<!-- @format -->

# Apple Commerce Shop Clone (Issue-driven Workflow)

이 프로젝트는 UI 클론보다 **GitHub 이슈 기반 개발(브랜치 전략 · PR · 커밋 컨벤션)**를 실습/문서화하는 것이 목표입니다.

- Demo: 준비중
- Images/Guideline: 사이트 가이드라인 리소스를 사용 예정
- Key Focus: Issue-driven · Branch strategy · Detailed README

## Preview

<!-- ![preview](docs/images/preview.png) -->

> 작업 시작 후 `docs/images/`에 이미지 추가 예정

- `docs/images/preview.png`

---

## Tech Stack

- Vite + React + TypeScript (`react-ts`)
- Styling: Tailwind CSS
- Routing: React Router (v6+)
- Deploy: Vercel

---

## Getting Started

### Requirements

- Node.js
- npm

### Install & Run

```bash
npm install
npm run dev
```

## Project Structure

<!-- prettier-ignore -->
```txt
reactCloneWeb/
  docs/
    images/
  src/
    assets/
    components/
    pages/
    hooks/
    styles/
    utils/
  README.md
  package.json
  vite.config.ts
```

## Branch Strategy

- `main`: production
- `dev`: integration
- work branches:
  - `feat/#12-header`
  - `fix/#21-bug`
  - `docs/#3-readme`
  - `chore/#5-eslint`

## Workflow

1. Issue 생성

2. 브랜치 생성 (이슈번호 포함)

3. 작업 + 커밋(컨벤션)

4. PR 생성 → 체크리스트 확인

5. dev에 머지, 릴리즈 시 main으로 머지

## Commit & PR Convention

### Commit

- `feat: ... (#issue)`
- `fix: ... (#issue)`
- `docs: ... (#issue)`
- `chore: ... (#issue)`

### PR

- Title: `[feat] 헤더 구현 (#12)`
- Description: `Closes #12`

## Roadmap

- [ ] 프로젝트 초기 세팅
- [ ] 공통 레이아웃(Header/Footer)
- [ ] 상품 리스트
- [ ] 상품 상세
- [ ] 장바구니 UI
- [ ] 반응형
- [ ] README/문서 고도화
