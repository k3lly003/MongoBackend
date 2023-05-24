import ArticleModel from "../Model/articles.js";

const updateArticle = async (req, res) => {
  const articleId = req.params.articleId;
  const updates = req.body;

  let found = await ArticleModel.find({ _id: articleId });
  if (found.length == 0) {
  } else {
  }
};

const readOneArticle = async (req, res) => {
  try {
    const name = req.param.reqId;
    const query = { _id: blogId };

    const result = await ArticleModel.find(query);

    if (result.length == 0) {
      res.status(404).json({
        message: "Data fetched not found",
        error: "No data found",
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Data fetched successfully",
        error: null,
        data: result,
      });
    }
    //  res.send()
  } catch (err) {
    res.status(500).send({
      message: "you failed",
      error: "Internal error",
      data: null,
    });
  }
};

const readArticlesLimited = async (req, res) => {
  try {
    const page = req.param.reqId;
    const range = req.query.limit;

    let limitation = range * page; //10*2 =20
    let start = limitation - range; //20-10 = 10

    let result = await ArticleModel.find({}).skip(start).limit(range);
    //HERE HANDLE THE SITUATION WHEN THE RESULTS ARE EMPTY
    res.status(200).json({
      message: "Data fetched successfully",
      error: null,
      data: result,
    });
  } catch (err) {
    res.send({
      message: "Failed to read the article specified",
      error: "Internal error server",
      data: null,
    });
  }
};
//
//
//
//
//
//
const createArticles = (req, res) => {
  try {
    const name = req.body;
    let articleInstance = new ArticleModel({
      //here u specify what u created in the model.
      title: name.title,
      content: name.content,
      author: name.author,
      image: name.image,
    });
    articleInstance.save().then((name) => {
      res.send({ message: "data saved successfully", name: name });
    });
  } catch (err) {
    res.send({ message: "failed to save data" });
  }
};
const updateArticles = (req, res) => {
  const number = req.params.myNumber;
  const start = req.query.start;
  const end = req.query;
  res.send([number, end, start]);
};
const deleteArticles = (req, res) => {
  const name = req.query.name;
  res.send(req.query);
};

export {
  createArticles,
  updateArticles,
  deleteArticles,
  readOneArticle,
  updateArticle,
};
