export type DataProps = {
  id: number;
  username: string;
  image: string;
  title: string;
  comment: string;
  date: string;
};

export type CommentProps = {
    comments: DataProps[];
}