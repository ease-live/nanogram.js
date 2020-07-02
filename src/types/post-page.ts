export interface IPostResponse {
  entry_data: {
    PostPage: IPostContent[];
  };
}

export interface IPostContent {
  graphql: object;
}

export interface IPostResult {
  entry_data: object;
  ok: boolean;
}
