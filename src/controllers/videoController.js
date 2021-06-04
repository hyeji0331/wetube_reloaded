let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];
export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
//home.pug이라는 템플릿에 videos라는 객체를 보내주고 있음.
//res.render는 home.put이라는 템플릿을 보여주는 메소드.

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  // 무슨 비디오를 보여줄건지
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  // 무슨 비디오를 편집할건지
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  //편집할 비디오의 id를 얻었고,
  const { title } = req.body;
  //(비디오 제목 수정)form에서 오는 body(req.body!!!)에서 새로운 타이틀을 얻었고,
  videos[id - 1].title = title;
  // 그런 다음, 비디오의 title을 업데이트 해줌.
  return res.redirect(`/videos/${id}`);
  //그리고나서, 다시 그 비디오를 돌려보냄
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
