# 대소고인

> 대소고인은 대구소프트웨어고등학교를 거친 많은 학생분들을 확인할 수 있는 사이트입니다.

### 본인 등록 방법

방법 - 1
1. 해당 저장소를 `fork`합니다.
2. `src/data/info.json`파일의 가장 하단에 본인의 정보를 입력합니다
3. 본 저장소로 `PR`을 요청합니다.
4. 확인 후 PR이 병합되며 반영됩니다 (시간이 소요됩니다)

방법 - 2
1. [Facebook 메신저](http://facebook.com/ChoiJinwoo03/)를 통해 (info.json의 내용 전달해주세요)
2. 검토 후 반영됩니다 (시간이 다소 소요됩니다)

### info.json 설명
```json
{
  "name": "이름 (필수)",
  "generation": "기수 (필수, 숫자)",
  "profile_image": "프로필 이미지 (옵션 - null or 빈 문자열, Github 이슈와 같은 방법을 통해 호스팅된 이미지의 URL이 등록되어야 합니다)",
  "intro": "간단 소개 (필수)",
  "club": [
    "활동",
    "동아리를",
    "배열로 (옵션 - 빈 배열)",
  ],
  "website": "개인 웹사이트 (옵션 - null or 빈 문자열)",
  "blog": "개인 블로그 (옵션 - null or 빈 문자열)",
  "github": "Github (옵션 - null or 빈 문자열)",
  "sns": "개인 SNS (옵션 - null or 빈 문자열)"
}
```