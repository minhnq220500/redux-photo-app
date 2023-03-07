import PropTypes from "prop-types";
import React from "react";
import "./Banner.scss";

type Props = {
  title: "";
  backgroundUrl: "";
};

function Banner(props: Props) {
  const { title, backgroundUrl } = props;

  const bannerStyle = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {};

  return (
    <section className="banner" style={bannerStyle}>
      <h1 className="banner__title">{title}</h1>
    </section>
  );
}

export default Banner;
