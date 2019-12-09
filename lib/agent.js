"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _superagentPromise = _interopRequireDefault(require("superagent-promise"));

var _superagent2 = _interopRequireDefault(require("superagent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const superagent = (0, _superagentPromise.default)(_superagent2.default, global.Promise);
const API_ROOT = 'https://conduit.productionready.io/api';
const encode = encodeURIComponent;

const responseBody = res => res.body;

let token = null;

const tokenPlugin = req => {
  if (token) {
    req.set('authorization', "Token ".concat(token));
  }
};

const requests = {
  del: url => superagent.del("".concat(API_ROOT).concat(url)).use(tokenPlugin).then(responseBody),
  get: url => superagent.get("".concat(API_ROOT).concat(url)).use(tokenPlugin).then(responseBody),
  put: (url, body) => superagent.put("".concat(API_ROOT).concat(url), body).use(tokenPlugin).then(responseBody),
  post: (url, body) => superagent.post("".concat(API_ROOT).concat(url), body).use(tokenPlugin).then(responseBody)
};
const Auth = {
  current: () => requests.get('/user'),
  login: (email, password) => requests.post('/users/servicios', {
    user: {
      email,
      password
    }
  }),
  register: (username, email, password) => requests.post('/users', {
    user: {
      username,
      email,
      password
    }
  }),
  save: user => requests.put('/user', {
    user
  })
};
const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => "limit=".concat(count, "&offset=").concat(p ? p * count : 0);

const omitSlug = article => Object.assign({}, article, {
  slug: undefined
});

const Articles = {
  all: page => requests.get("/articles?".concat(limit(10, page))),
  byAuthor: (author, page) => requests.get("/articles?author=".concat(encode(author), "&").concat(limit(5, page))),
  byTag: (tag, page) => requests.get("/articles?tag=".concat(encode(tag), "&").concat(limit(10, page))),
  del: slug => requests.del("/articles/".concat(slug)),
  favorite: slug => requests.post("/articles/".concat(slug, "/favorite")),
  favoritedBy: (author, page) => requests.get("/articles?favorited=".concat(encode(author), "&").concat(limit(5, page))),
  feed: () => requests.get('/articles/feed?limit=10&offset=0'),
  get: slug => requests.get("/articles/".concat(slug)),
  unfavorite: slug => requests.del("/articles/".concat(slug, "/favorite")),
  update: article => requests.put("/articles/".concat(article.slug), {
    article: omitSlug(article)
  }),
  create: article => requests.post('/articles', {
    article
  })
};
const Comments = {
  create: (slug, comment) => requests.post("/articles/".concat(slug, "/comments"), {
    comment
  }),
  delete: (slug, commentId) => requests.del("/articles/".concat(slug, "/comments/").concat(commentId)),
  forArticle: slug => requests.get("/articles/".concat(slug, "/comments"))
};
const Profile = {
  follow: username => requests.post("/profiles/".concat(username, "/follow")),
  get: username => requests.get("/profiles/".concat(username)),
  unfollow: username => requests.del("/profiles/".concat(username, "/follow"))
};
var _default = {
  Articles,
  Auth,
  Comments,
  Profile,
  Tags,
  setToken: _token => {
    token = _token;
  }
};
exports.default = _default;