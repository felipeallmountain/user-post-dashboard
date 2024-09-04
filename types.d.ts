type User = {
  "id": number,
  "username": string,
  "email": string,
  "company": {
    "name": string,
  },
  "postcounts": Post[]
}

type Post = {
  "userId": number,
  "title": string,
}