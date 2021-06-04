import express from "express";
//익스프레스라는 패키지를 익스프레스라는 이름으로 가져옴
//노드js와 npm은 똑똑하기 때문에 이렇게 입력하면 노드모듈스에서 익스프레스를 찾고 있다는 것을 알아냄.

//미들웨어
import morgan from "morgan";

import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";

const PORT = 4000;

const app = express();
//app이라는 이름의 (포테이토 가능) 익스프레스 애플리케이션 만들기
//서버(24시간 켜져있는 컴퓨터)가 하는 일 -> 리퀘스트를 받고 리스폰스 하는 것~!
// req, res는 서버와 상호작용하는 모든 것. 서버는 그것을 리슨함.

const logger = morgan("dev");
// 모르간을 설정하는 방법은 npm morgan 검색~! dev는 모르간의 5가지 옵션 중 하나임

//미들웨어 사용
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//urlencoded ->express 어플리케이션이 form의 value들을 이해할 수 있도록 하고, js형식으로 변형시켜줌.

//라우터
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening port http://localhost:${PORT}💨`);

app.listen(PORT, handleListening);
//서버는 항상 리슨하고 있음. 리슨에는 항상 콜백이 있음. (핸들리스닝)
//서버에게 어떤 포트를 리스닝할지 알려줘야 함. (4000번 포트에 접속하면 핸들리스닝 실행해라)
// app이라는 서버를 만들고 리슨해주면 서버 완성~!
