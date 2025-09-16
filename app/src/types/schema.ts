interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type MediaType = {
  url: string;
  width: number;
  height: number;
};
type Structure<T, P> = T extends "get"
  ? { id: string } & DateType & Required<P>
  : T extends "gets"
    ? GetsType<{ id: string } & DateType & Required<P>>
    : Partial<DateType> & (T extends "patch" ? Partial<P> : P);

export type Project<T = "get"> = Structure<
  T,
  {
    /**
     * プロジェクト名
     */
    name: string;
    /**
     * プロジェクトの説明
     */
    description: string;
    /**
     * プロジェクトのURL
     */
    url: string;
    /**
     * 機能
     */
    features?: Project_Features[];
    /**
     * プロジェクトのスクリーンショット
     */
    image: MediaType;
    /**
     * プロジェクトが利用可能か
     */
    available: boolean;
  }
>;

export interface Project_Features {
  fieldId: "features";
  /**
   * 機能
   */
  feature?: string;
}

export interface EndPoints {
  get: {
    projects: Project<"get">;
  };
  gets: {
    projects: Project<"gets">;
  };
  post: {
    projects: Project<"post">;
  };
  put: {
    projects: Project<"put">;
  };
  patch: {
    projects: Project<"patch">;
  };
}
