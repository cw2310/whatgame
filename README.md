# whatgame
- 원맨피 (원빈이 맨티스 피하기)

# 환경
- npm 8.5.4
- node.js 16.16.0
- phaser 3.60.0

# 빌드 (확실하진 않음)
1. root 경로에서
```
> npm install phaser webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
> npm install file-loader --save-dev 
> npx webpack
```

2. dist 경로에서
```
> jar -cvf _FILENAME_.war *
```

※ Github page를 통한 배포
```
git subtree push --prefix dist/ origin gh-pages
```
