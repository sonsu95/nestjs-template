# NestJS 템플릿 (ESLint 및 Prettier 포함)

코드 품질 도구와 현대적인 TypeScript 구성이 포함된 NestJS 템플릿입니다.

## 주요 기능

- 🚀 [NestJS](https://nestjs.com/) - 진보적인 Node.js 프레임워크
- 📝 [TypeScript](https://www.typescriptlang.org/) - 타입 안정성과 최신 JavaScript 기능
- ✨ [ESLint](https://eslint.org/) - 일관된 코드 품질을 위한 엄격한 린팅 규칙
  - Flat config를 사용한 타입 인식 린팅
  - 타입 import 강제
  - 엄격한 명명 규칙
  - 클래스 멤버 순서 관리
  - 함수 반환 타입 강제
- 💅 [Prettier](https://prettier.io/) - 일관된 코드 포맷팅
- 🧪 Jest 테스트 환경

## 시작하기

### 필수 조건

- Node.js (v18 이상 권장)
- pnpm (v8 이상)

### 설치

```bash
# 저장소 복제
git clone [your-repository-url]

# 의존성 설치
pnpm install
```

### 개발

```bash
# 개발 서버 시작
pnpm run start:dev

# 단위 테스트 실행
pnpm run test

# E2E 테스트 실행
pnpm run test:e2e
```

## 프로젝트 구조

```
.
├── src/                      # 소스 코드
│   ├── app.controller.ts     # 메인 애플리케이션 컨트롤러
│   ├── app.service.ts        # 메인 애플리케이션 서비스
│   ├── app.module.ts         # 루트 애플리케이션 모듈
│   └── main.ts               # 애플리케이션 진입점
├── test/                     # 테스트 파일
│   ├── app.e2e-spec.ts       # E2E 테스트
│   └── jest-e2e.json         # Jest E2E 설정
├── eslint.config.mjs         # ESLint flat 설정
├── .prettierrc               # Prettier 설정
├── nest-cli.json             # NestJS CLI 설정
├── tsconfig.json             # TypeScript 설정
├── tsconfig.build.json       # TypeScript 빌드 설정
└── package.json              # 프로젝트 의존성 및 스크립트
```

## 코드 스타일 가이드

이 템플릿은 ESLint와 Prettier를 통해 엄격한 코딩 표준을 적용합니다:

### TypeScript 가이드라인
- 함수 반환 타입 명시 필수
- 클래스 멤버의 접근 제한자 명시 필수
- 인터페이스 이름은 'I'로 시작하고 PascalCase 사용
- Enum 이름은 PascalCase 사용
- 일관된 타입 import 강제
- 함수 길이 50줄 제한

### Import 가이드라인
- 타입 import는 값 import와 분리
  ```typescript
  // ✅ 좋은 예
  import type { INestApplication } from '@nestjs/common';
  import { Test } from '@nestjs/testing';
  
  // ❌ 나쁜 예
  import { INestApplication, Test } from '@nestjs/testing';
  ```
- import 구문 자동 정렬
- 클래스 멤버 일관된 순서 유지

## 사용 가능한 스크립트

- `start`: 개발 모드로 애플리케이션 시작
- `start:dev`: 핫 리로드로 애플리케이션 시작
- `start:debug`: 디버그 모드로 애플리케이션 시작
- `start:prod`: 프로덕션 모드로 애플리케이션 시작
- `build`: 애플리케이션 빌드
- `test`: 단위 테스트 실행
- `test:watch`: 감시 모드로 단위 테스트 실행
- `test:cov`: 테스트 커버리지 리포트 생성
- `test:debug`: 디버그 모드로 테스트 실행
- `test:e2e`: E2E 테스트 실행

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.
