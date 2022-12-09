import React, { CSSProperties, FC, ReactElement } from "react";
import { CommentProps, DataProps } from "./App.types";

const styles: CSSProperties = {
  margin: "16px",
  padding: "16px",
  boxSizing: "border-box",
  borderRadius: "5px",
};

const img_style: CSSProperties = {
  width: "64px",
  height: "64px",
  borderRadius: "32px",
};

export const Comment: FC<CommentProps> = ({ comments }): ReactElement => {
  return (
    <>
      <article className="row justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-6">
          {comments.map((_comment_: DataProps) => {
            const { id, username, image, title, comment, date } = _comment_;
            return (
              <div
                className="card mt-3 mb-3 text-left glass move-on-hover"
                key={id}
                style={styles}
              >
                <div className="card-header">
                  <img
                    src={image}
                    alt={username}
                    className=""
                    style={img_style}
                  />
                  <h5 className="text-black fw-bold"> {username} </h5>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark"> {title} </h5>
                  <p className="card-text">{comment}</p>
                </div>
                <div className="card-footer">
                  <h6 className="fw-bold"> {date} </h6>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};
