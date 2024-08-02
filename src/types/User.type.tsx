export type User = {
  uid: string;
  email: string;
  username: string;
  fullname: string;
  bio: string;
  profileImageURL: string;
  followers: any[];
  following: any[];
  posts: any[];
  createdAt: string;
};

export type UserState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};
